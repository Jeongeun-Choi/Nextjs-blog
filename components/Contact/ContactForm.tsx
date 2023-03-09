import { FormEvent, useRef } from 'react';
import classes from './contact-form.module.css';

const ContactForm = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmitMessage = (event: FormEvent) => {
        event.preventDefault();

        const email = emailRef.current?.value;
        const name = nameRef.current?.value;
        const message = messageRef.current?.value;

        if(!email || !name || !message) {
            return;
        }

        const params = {email, name, message};

        fetch('/api/contact', {method: 'POST', body: JSON.stringify(params), headers: {'Content-Type': 'application/json'}})
    }

    return ( <section className={classes.contact}>
        <h1>How can I help you?</h1>
        <form className={classes.form} onSubmit={handleSubmitMessage}>
          <div className={classes.controls}>
            <div className={classes.control}>
              <label htmlFor='email'>Your Email</label>
              <input
              ref={emailRef}
                type='email'
                id='email'
                required
              />
            </div>
            <div className={classes.control}>
              <label htmlFor='name'>Your Name</label>
              <input
              ref={nameRef}
                type='text'
                id='name'
                required
              />
            </div>
          </div>
          <div className={classes.control}>
            <label htmlFor='message'>Your Message</label>
            <textarea
            ref={messageRef}
              id='message'
              rows={5}
              required
            ></textarea>
          </div>
  
          <div className={classes.actions}>
            <button>Send Message</button>
          </div>
        </form>
      </section>)
}

export default ContactForm;