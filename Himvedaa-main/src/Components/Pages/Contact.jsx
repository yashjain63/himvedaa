import React, { useState, useEffect} from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Scroll To top   
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill out all fields.");
      return;
    }

    // You can replace this with your API call
    console.log("Form Submitted:", formData);
    setStatus("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="cntact" className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Contact Info */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-8">
            Have questions? We’re here to help. Reach out via the form or contact
            us directly.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Mail className="text-green-600" />
              <span className="text-gray-700">info@yourwebsite.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-green-600" />
              <span className="text-gray-700">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-green-600" />
              <span className="text-gray-700">
                1234 Main Street, City, Country
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-xl font-semibold hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>

          {status && (
            <p className="mt-4 text-center text-sm text-gray-600">{status}</p>
          )}
        </div>
      </div>
      <div className="w-full mt-10 px-4 md:px-10 lg:px-20 py-10 bg-[#E6E4E1]">
        <div className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13518.853007815713!2d76.2629000320481!3d32.104034709840576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b4f902117bb1f%3A0xf28a1e3b1ff9e8f9!2sKangra%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1727256970607!5m2!1sen!2sin"
            className="w-full h-full rounded shadow-lg"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
    
  );
};

export default Contact;