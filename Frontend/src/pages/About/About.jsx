function About() {
    return(
     <section className="w-full min-h-screen bg-gradient-to-b from-gray-100 to-white py-12 px-6">
      
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-600 mb-4">
            About EasyMart
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Making online shopping simple, fast, and affordable for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Your Trusted Shopping Partner
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              EasyMart is a modern e-commerce platform built to deliver
              convenience and quality. From daily essentials to trending
              products, we ensure everything reaches you quickly and safely.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our platform focuses on user-friendly design, affordable pricing,
              and trusted service — so you can shop with confidence anytime.
            </p>

            <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition">
              Start Shopping
            </button>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
              alt="shopping"
              className="rounded-2xl shadow-lg hover:scale-105 transition duration-300"
            />
          </div>

        </div>

        <h2 className="text-3xl font-semibold text-center mb-8">
          Why Choose EasyMart?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold mb-2">🛒 Easy Shopping</h3>
            <p className="text-gray-600">
              Smooth and simple interface for hassle-free shopping.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold mb-2">💰 Best Prices</h3>
            <p className="text-gray-600">
              Get top-quality products at unbeatable prices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold mb-2">🚚 Fast Delivery</h3>
            <p className="text-gray-600">
              Quick and reliable delivery to your doorstep.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold mb-2">🔐 Secure Payment</h3>
            <p className="text-gray-600">
              100% safe and secure payment options available.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold mb-2">⭐ Trusted Service</h3>
            <p className="text-gray-600">
              Customer satisfaction is our top priority.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold mb-2">📦 Wide Range</h3>
            <p className="text-gray-600">
              Everything you need in one place.
            </p>
          </div>

        </div>

        <div className="bg-gray-900 text-white rounded-2xl p-10 grid md:grid-cols-4 text-center mb-12">
          <div>
            <h3 className="text-3xl font-bold">10K+</h3>
            <p className="text-gray-400">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">5K+</h3>
            <p className="text-gray-400">Products</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">99%</h3>
            <p className="text-gray-400">Satisfaction</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">24/7</h3>
            <p className="text-gray-400">Support</p>
          </div>
        </div>

        <div className="bg-green-500 text-white text-center p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-3">
            Ready to Shop with EasyMart?
          </h2>
          <p className="mb-5">
            Explore thousands of products at the best prices today!
          </p>
          <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>

      </div>
    </section>
    );
}

export default About;