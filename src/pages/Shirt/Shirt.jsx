import Formalshirt from "../../assets/Formalshirt.jpg";
import Longshirt from "../../assets/Longshirt.jpg";
import Fitgreenshirt from "../../assets/Fitgreenshirt.jpg";
import Formalshirtgirl from "../../assets/Formalshirtgirl.jpg";
import Longshirtgirl from "../../assets/Longshirtgirl.jpg";
import Stylishshirtgirl from "../../assets/Stylishshirtgirl.jpg";

import { useCart } from "../../context/CartContext";

function Shirt () {
  const { addToCart } = useCart();

  return(
   <section className="w-full min-h-screen bg-gray-100 py-10 px-6">

      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
        Men's Shirt Collection
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden">
          <img
            src={Formalshirt}
            className="w-full h-60 object-cover hover:scale-105 transition duration-300"
            alt="shirt"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Formal Shirt</h3>
            <p className="text-gray-500 text-sm">Perfect office wear</p>
            <p className="text-blue-600 font-bold text-xl mt-2">₹999</p>
            <button 
              onClick={() => addToCart({ id: 1, name: "Formal Shirt", price: 999, img: Formalshirt })}
              className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden">
          <img
            src={Longshirt}
            className="w-full h-60 object-cover hover:scale-105 transition duration-300"
            alt="shirt"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Long Shirt</h3>
            <p className="text-gray-500 text-sm">Daily comfortable wear</p>
            <p className="text-blue-600 font-bold text-xl mt-2">₹799</p>
            <button 
              onClick={() => addToCart({ id: 2, name: "Long Shirt", price: 799, img: Longshirt })}
              className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden">
          <img
            src={Fitgreenshirt}
            className="w-full h-60 object-cover hover:scale-105 transition duration-300"
            alt="shirt"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Fitgreen Shirt</h3>
            <p className="text-gray-500 text-sm">Trendy look</p>
            <p className="text-blue-600 font-bold text-xl mt-2">₹899</p>
            <button 
              onClick={() => addToCart({ id: 3, name: "Fitgreen Shirt", price: 899, img: Fitgreenshirt })}
              className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden">
          <img
            src={Formalshirtgirl}
            className="w-full h-60 object-cover hover:scale-105 transition duration-300"
            alt="shirt"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Formal Shirt</h3>
            <p className="text-gray-500 text-sm">Stylish denim look</p>
            <p className="text-blue-600 font-bold text-xl mt-2">₹1199</p>
            <button 
              onClick={() => addToCart({ id: 4, name: "Formal Shirt", price: 1199, img: Formalshirtgirl })}
              className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden">
          <img
            src={Longshirtgirl}
            className="w-full h-60 object-cover hover:scale-105 transition duration-300"
            alt="shirt"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Printed Shirt</h3>
            <p className="text-gray-500 text-sm">Modern design</p>
            <p className="text-blue-600 font-bold text-xl mt-2">₹899</p>
            <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden">
          <img
            src={Stylishshirtgirl}
            className="w-full h-60 object-cover hover:scale-105 transition duration-300"
            alt="shirt"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Stylish Shirt</h3>
            <p className="text-gray-500 text-sm">Light & breathable</p>
            <p className="text-blue-600 font-bold text-xl mt-2">₹1099</p>
            <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Shirt;