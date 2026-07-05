function Footer() {
    return(
      <footer className="bg-gray-900 text-white pt-12 pb-6">
      
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        
        {/* 🔹 Brand Info */}
        <div>
          <h2 className="text-3xl font-bold text-green-400 mb-4">EasyMart</h2>
          <p className="text-gray-400">
            Your one-stop shop for daily needs. Fast delivery, best prices, and trusted service.
          </p>
        </div>

        {/* 🔹 Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <ul className="space-y-2 text-gray-400">
            <li>📞 +91 9097710004</li>
            <li>📧 support@easymart.com</li>
            <li>📍 Patna, Bihar, India</li>
          </ul>
        </div>

        {/* 🔹 Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-green-400 cursor-pointer">Home</li>
            <li className="hover:text-green-400 cursor-pointer">Shop</li>
            <li className="hover:text-green-400 cursor-pointer">About</li>
            <li className="hover:text-green-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* 🔹 Newsletter / Message */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Subscribe</h2>
          <p className="text-gray-400 mb-3">
            Get updates about offers and new products.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full p-2 rounded-l-lg text-black focus:outline-none"
            />
            <button className="bg-green-500 px-4 rounded-r-lg hover:bg-green-600">
              Send
            </button>
          </div>
        </div>

      </div>

      {/* 🔹 Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400">
        <p>© 2026 EasyMart. All rights reserved.</p>
      </div>

    </footer>
    );
}

export default Footer;