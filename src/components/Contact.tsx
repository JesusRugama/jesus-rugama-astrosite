"use client";
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xeoqqvzj");
  const [val, setVal] = useState('a')

  console.log({val, state, handleSubmit})

  if (state.succeeded) {
    return <div className='text-neutral flex flex-col space-y-4 mb-[50px]'>
      <p>Thanks for joining!</p>
    </div>;
  }

  return (
    <form
      action="https://formspree.io/f/xeoqqvzj"
      method="POST"
      onSubmit={(event) => {
        event.preventDefault();

        console.log(event);
        handleSubmit(event);
      }}
      className='text-neutral flex flex-col space-y-4 mb-[50px]'
    >
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className='border border-neutral rounded-md p-2'
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={6}
        className='border border-neutral rounded-md p-2'
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button
        type="submit"
        disabled={state.submitting}
        className='bg-primary rounded-md p-2 text-white'
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;