import React, { useState, useEffect } from "react";
import Footer from "./Footer";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [savedMessages, setSavedMessages] = useState([]);

  // Load previous messages from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("contactMessages")) || [];
    setSavedMessages(stored);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to localStorage
    const updated = [...savedMessages, form];
    localStorage.setItem("contactMessages", JSON.stringify(updated));
    setSavedMessages(updated);

    alert("Message saved locally ✅");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Main Content */}
      <main className="flex-grow p-6 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-white mb-10 text-center">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
          {/* Contact Information Section */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="mb-4">
              Have a project in mind? Reach out to us and let's build something
              amazing together.
            </p>
            <ul className="space-y-3">
              <li>
                📍 <span className="font-semibold">Office:</span> 123 Builder Street,
                Construction City, India
              </li>
              <li>
                📞 <span className="font-semibold">Phone:</span> +91 98765 43210
              </li>
              <li>
                📧 <span className="font-semibold">Email:</span>{" "}
                contact@amanconstruction.com
              </li>
              <li>
                🕒 <span className="font-semibold">Working Hours:</span> Mon - Sat,
                9AM - 6PM
              </li>
            </ul>
            <div className="mt-6">
              <iframe
                title="office-map"
                className="w-full h-48 rounded-xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.569968493993!2d90.4125182154319!3d23.810331984556796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71c4a26e7a5%3A0x3f3c9dcbab6df52e!2sConstruction%20Office!5e0!3m2!1sen!2sin!4v1693212345678!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white outline-none"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white outline-none"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white outline-none"
              />
              <button
                type="submit"
                className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-bold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Saved Messages Section */}
        {savedMessages.length > 0 && (
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg mt-10 w-full max-w-4xl text-white">
            <h3 className="text-2xl font-bold mb-4">Saved Messages (Local)</h3>
            <ul className="space-y-3">
              {savedMessages.map((msg, i) => (
                <li key={i} className="p-3 bg-white/5 rounded-lg">
                  <p>
                    <strong>Name:</strong> {msg.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {msg.email}
                  </p>
                  <p>
                    <strong>Message:</strong> {msg.message}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
