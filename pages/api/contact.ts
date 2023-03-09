import { NextApiRequest, NextApiResponse } from "next";

function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'POST') {
        const {email, name, message} = req.body;
        
        if(!email || !name || !message || !email.includes('@') || (name.trim() === '') || (message.trim() === '')){
            return res.status(422).json({message: '유효하지 않은 입력입니다.'});
        }

        const newMessage = {
            email, name, message
        }

        console.log(newMessage);

        return res.status(200).json(newMessage);
    }
}

export default handler;