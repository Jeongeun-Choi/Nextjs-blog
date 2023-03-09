import Head from "next/head";
import ContactForm from "../components/Contact/ContactForm";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="연락주세요" />
      </Head>
      <ContactForm />
    </>
  );
};

export default ContactPage;
