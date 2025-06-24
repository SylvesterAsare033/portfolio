// src/components/Contact.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center bg-[#0F0F1E] text-white px-6"
      id="contact"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Get In <span className="text-purple-500">Touch</span>
      </h2>

      {/* Social Links */}
      <div className="flex space-x-8 mb-12 text-3xl">
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/yourtwitter"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition"
        >
          <FaTwitter />
        </a>
        <a
          href="mailto:youremail@example.com"
          className="hover:text-purple-500 transition"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Contact Form */}
      <form className="w-full max-w-xl space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Message</label>
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded text-white font-semibold transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
