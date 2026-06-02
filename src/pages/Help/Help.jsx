import React from "react";

function Help() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Help Center
          </h1>
          <p className="text-gray-600 mt-2">
            We're here to help you with your orders and queries.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">
                How can I track my order?
              </h3>
              <p className="text-gray-600">
                Go to "My Orders" section and click on Track Order.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                What is the return policy?
              </h3>
              <p className="text-gray-600">
                Products can be returned within 7 days of delivery.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                How do I cancel an order?
              </h3>
              <p className="text-gray-600">
                Visit My Orders and select the Cancel Order option.
              </p>
            </div>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Delivery Information
          </h2>

          <p className="text-gray-600">
            Standard delivery takes 3-7 business days depending on
            your location.
          </p>
        </div>

        {/* Contact Support */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            Contact Support
          </h2>

          <div className="space-y-2 text-gray-700">
            <p>Email: support@easymart.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Available: Monday - Saturday (9 AM - 7 PM)</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Help;