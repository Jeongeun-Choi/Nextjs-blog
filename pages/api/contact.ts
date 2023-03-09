import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'POST') {
        const {email, name, message} = req.body;
        
        if(!email || !name || !message || !email.includes('@') || (name.trim() === '') || (message.trim() === '')){
            return res.status(422).json({message: '유효하지 않은 입력입니다.'});
        }

        const newMessage = {
            email, name, message
        }

        let client = null;

        try {
            client = await MongoClient.connect(`mongodb+srv://jeong:${process.env.MONGODB_PWD}@cluster0.bez8tll.mongodb.net/test`)
        } catch(error) {
            res.status(500).json({message: 'Could not Connect DB'})
            return 
        }

        const db = client.db();

        try {
            const result = await db.collection('messages').insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch(e) {
            res.status(500).json({message: "Storing message fail!"});
            return;
        }
        client.close();
        return res.status(200).json(newMessage);
    }
}

export default handler;