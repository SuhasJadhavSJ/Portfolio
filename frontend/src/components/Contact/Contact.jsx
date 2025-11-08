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
      className="min-h-screen flex flex-col justify-center items-center bg-[#F9FAFB] text-slate-900 px-4 pt-16 pb-8"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Contact <span className="text-amber-500">Me</span>
        </h2>
        <p className="text-center mb-10 text-slate-600">
          Feel free to reach out for collaborations, freelance work, or just to say hello.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-white p-8 rounded-xl border border-gray-200 shadow-[0_4px_20px_rgba(245,158,11,0.1)]"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded-md border border-gray-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded-md border border-gray-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 rounded-md border border-gray-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          ></textarea>

          <button
            type="submit"
            className="bg-amber-500 text-white font-semibold py-3 rounded-md hover:bg-amber-600 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
