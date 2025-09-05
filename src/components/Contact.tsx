 "use client";
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React, {useState, useRef, type ChangeEvent, type FormEvent} from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const submitting = useRef(false);
  const succeeded = useRef(false);

  const handleFieldOnChange =  (event: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      })
  }

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    submitting.current = true;

    fetch("https://getform.io/f/aroggzqb", {
      method: "POST",
      body: (() => {
        const form = new FormData()
        form.append('name', formData.name);
        form.append('email', formData.email);
        form.append('message', formData.message);

        return form;
      })(),
      headers: {
        "Accept": "application/json",
      },
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))

    submitting.current = false;
    succeeded.current = true;
  }

  if (succeeded.current) {
    return <div className='text-neutral flex flex-col space-y-4 mb-[50px]'>
      <p>Thanks for joining!</p>
    </div>;
  }

  return (
    <form
      action="https://getform.io/f/aroggzqb"
      method="POST"
      onSubmit={handleFormSubmit}
      className='text-neutral flex flex-col space-y-4 mb-[50px]'
    >
      <label htmlFor="contact-name">
        Name
      </label>
      <input
          id="contact-name"
          type="name"
          name="name"
          className='border border-neutral rounded-md p-2'
          value={formData.name}
          onChange={handleFieldOnChange}
      />
      <label htmlFor="contact-email">
        Email Address
      </label>
      <input
        id="contact-email"
        type="email"
        name="email"
        className='border border-neutral rounded-md p-2'
        value={formData.email}
        onChange={handleFieldOnChange}
      />
      <label htmlFor="contact-message">
        Message
      </label>
      <textarea
        id="contact-message"
        name="message"
        rows={6}
        className='border border-neutral rounded-md p-2'
        value={formData.message}
        onChange={handleFieldOnChange}
      />
      <button
        type="submit"
        disabled={submitting.current}
        className='bg-primary rounded-md p-2 text-white'
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;