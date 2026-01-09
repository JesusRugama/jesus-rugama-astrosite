"use client";

import React, { useState, useRef, type ChangeEvent } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // Replaced submitting ref
  const [isSucceeded, setIsSucceeded] = useState(false); // Replaced succeeded ref
  const [error, setError] = useState<string | null>(null); // Replaced error ref

  const handleFieldOnChange = (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitContactForm = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://api.jesusrugama.com/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log('Success:', await response.json());

      setIsSucceeded(true); // Trigger re-render to show success message
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to send your message. Please try again or email me at youremail@example.com.');
    } finally {
      setIsSubmitting(false); // Trigger re-render to update button state
    }
  };

  if (isSucceeded) {
    return (
        <div
            role="alert"
            className="text-neutral flex flex-col space-y-4 mb-[50px] items-center text-center"
        >
          <h2 className="text-2xl font-bold">Message Sent!</h2>
          <p>
            Thank you, {formData.name || 'friend'}, for reaching out! Your message has been successfully
            sent to my inbox. <br/> I’ll respond soon.
          </p>
        </div>
    )
  }

  return (
      <form
          method="POST"
          onSubmit={(event) => {
            event.preventDefault()

            submitContactForm();
          }}
          className="text-neutral flex flex-col space-y-4 mb-[50px]"
      >
        {error && (
            <p className="text-red-500">{error}</p> // Display error message
        )}
        <label htmlFor="contact-name">Name</label>
        <input
            id="contact-name"
            type="text" // Changed to "text" for name input
            name="name"
            className="border border-neutral rounded-md p-2"
            value={formData.name}
            onChange={handleFieldOnChange}
        />
        <label htmlFor="contact-email">Email Address</label>
        <input
            id="contact-email"
            type="email"
            name="email"
            className="border border-neutral rounded-md p-2"
            value={formData.email}
            onChange={handleFieldOnChange}
        />
        <label htmlFor="contact-message">Message</label>
        <textarea
            id="contact-message"
            name="message"
            rows={6}
            className="border border-neutral rounded-md p-2"
            value={formData.message}
            onChange={handleFieldOnChange}
        />
        <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary rounded-md p-2 text-white"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
  );
}

export default ContactForm;