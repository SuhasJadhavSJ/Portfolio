import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-black text-yellow-400 px-4"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold mb-6 text-center border-b-4 border-yellow-400 inline-block">
          Contact
        </h2>
        <p className="text-center mb-10 text-gray-300">
          Feel free to reach out to me for collaborations, project discussions, or just a friendly chat.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-gray-900 p-8 rounded-lg shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded-md border border-yellow-400 bg-transparent text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded-md border border-yellow-400 bg-transparent text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 rounded-md border border-yellow-400 bg-transparent text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>

          <button
            type="submit"
            className="bg-yellow-400 text-black font-bold py-3 rounded-md hover:bg-yellow-300 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
