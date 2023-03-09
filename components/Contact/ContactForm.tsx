import { FormEvent, useEffect, useRef, useState } from "react";
import Notification from "../ui/Notification";
import classes from "./contact-form.module.css";

async function sendContactData(contact: {
  email: string;
  name: string;
  message: string;
}) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contact),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
}

const ContactForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [requestStatus, setRequestStatus] = useState<string>("");
  const [requestError, setRequestError] = useState<string>("");

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus("");
        setRequestError("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const handleSubmitMessage = async (event: FormEvent) => {
    event.preventDefault();

    const email = emailRef.current?.value;
    const name = nameRef.current?.value;
    const message = messageRef.current?.value;

    if (!email || !name || !message) {
      return;
    }

    const params = { email, name, message };
    setRequestStatus("pending");
    try {
      await sendContactData(params);
      setRequestStatus("success");
      emailRef.current.value = "";
      nameRef.current.value = "";
      messageRef.current.value = "";
    } catch (e: any) {
      setRequestStatus("error");
      setRequestError(e.message);
    }
  };

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "메시지 전송 중...",
      message: "메시지를 전송하고 있습니다.",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "메시지 전송 성공",
      message: "메시지가 전송 되었습니다.",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "메시지 전송 실패",
      message: requestError,
    };
  }
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={handleSubmitMessage}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input ref={emailRef} type="email" id="email" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input ref={nameRef} type="text" id="name" required />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea ref={messageRef} id="message" rows={5} required></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
