import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-600 to-purple-500 py-16 px-4"
      id="contact"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-white drop-shadow">
          Contact Me
        </h2>

        {/* Contact Form */}
        <form className="space-y-6 bg-white/90 p-8 rounded-2xl shadow-2xl max-w-xl mx-auto backdrop-blur">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-50"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-50"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-50"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-12 text-white text-2xl">
          <a
            href="mailto:youremail@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors focus:outline-none focus:text-blue-200"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors focus:outline-none focus:text-blue-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors focus:outline-none focus:text-blue-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors focus:outline-none focus:text-blue-200"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
