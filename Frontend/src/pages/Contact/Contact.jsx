import { Link } from 'react-router-dom';
import emailjs from "@emailjs/browser";
import { useState } from "react";

function Contact() {

     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [message, setMessage] = useState("");

    return(
       <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-10 text-green-600">
          Contact EasyMart
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>

            <p className="mb-3">📞 +91 90977710004</p>
            <p className="mb-3">📧 support@easymart.com</p>
            <p>📍 Patna, Bihar, India</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>

            <ul className="space-y-3">
              <li className="hover:text-green-500 cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-green-500 cursor-pointer">
                <Link to="/products">Shop</Link>
              </li>
              <li className="hover:text-green-500 cursor-pointer">
                <Link to="/about">About Us</Link>
              </li>
              <li className="hover:text-green-500 cursor-pointer">
                <Link to="/cart">Cart</Link>
              </li>
              <li className="hover:text-green-500 cursor-pointer">
                <Link to="/login">Login</Link>
              </li>
              <li className="hover:text-green-500 cursor-pointer">
                <Link to="/help">Help</Link>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-4">Message Us</h2>

            <form className="space-y-4">
             <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />

              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />

              <textarea
               placeholder="Your Message"
               rows="4"
               value={message}
               onChange={(e) => setMessage(e.target.value)}
               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
             ></textarea>

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
    );
}

export default Contact;