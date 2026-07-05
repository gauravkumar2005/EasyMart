import React from "react";

function Orders() {
  const orders = [
    {
      id: "#EM101",
      product: "Wireless Headphones",
      date: "02 June 2026",
      price: "₹2,499",
      status: "Delivered",
    },
    {
      id: "#EM102",
      product: "Smart Watch",
      date: "28 May 2026",
      price: "₹3,999",
      status: "Shipped",
    },
    {
      id: "#EM103",
      product: "Laptop Bag",
      date: "20 May 2026",
      price: "₹899",
      status: "Pending",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          My Orders
        </h1>

        <div className="space-y-5">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-xl shadow-md p-5 flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div>
                <h2 className="text-xl font-semibold">
                  {order.product}
                </h2>
                <p className="text-gray-500">
                  Order ID: {order.id}
                </p>
                <p className="text-gray-500">
                  Date: {order.date}
                </p>
              </div>

              <div className="mt-4 md:mt-0 text-center">
                <p className="font-bold text-lg">
                  {order.price}
                </p>

                <span
                  className={`px-3 py-1 rounded-full text-white text-sm ${
                    order.status === "Delivered"
                      ? "bg-green-500"
                      : order.status === "Shipped"
                      ? "bg-blue-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-white rounded-xl shadow-md p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Order Summary
          </h2>

          <div className="flex justify-between mb-2">
            <span>Total Orders</span>
            <span>3</span>
          </div>

          <div className="flex justify-between">
            <span>Total Spent</span>
            <span>₹7,397</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Orders;