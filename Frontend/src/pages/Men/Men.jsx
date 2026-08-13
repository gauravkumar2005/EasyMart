import Oversize from "../../assets/Oversize.jpg";
import Shirt from "../../assets/Shirt.jpg";
import Shirt2 from "../../assets/Shirt2.jpg";
import Shirt3 from "../../assets/Shirt3.jpg";
import Jeansimg from "../../assets/Jeansimg.jpg";
import Jeansimg2 from "../../assets/Jeansimg2.jpg";

import { useCart } from "../../context/CartContext";

function Men () {
   const { addToCart } = useCart();
  return(
       <section className="w-full min-h-screen bg-gray-100 py-10 px-6">

      <h2 className="text-4xl font-bold text-center text-green-600 mb-10">
        T-Shirts Collection
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2 overflow-hidden">
          <img
            src={Shirt}
            className="w-full h-60 object-cover"
            alt="tshirt"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Shirt</h3>
            <p className="text-gray-500 text-sm">Comfortable cotton wear</p>
            <p className="text-green-600 font-bold text-xl mt-2">₹499</p>

         <div className="mt-4 flex gap-3">
            <button 
              onClick={() => addToCart({ id: 1, name: "Shirt", price: 499, img: Shirt })}
              className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
              Add to Cart
            </button>
            <button
              className="mt-2 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
               Buy Now
            </button>
         </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2 overflow-hidden">
          <img
            src={Shirt2}
            className="w-full h-60 object-cover"
            alt="tshirt"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Shirt</h3>
            <p className="text-gray-500 text-sm">Stylish casual wear</p>
            <p className="text-green-600 font-bold text-xl mt-2">₹599</p>

         <div className="mt-4 flex gap-3">
            <button 
              onClick={() => addToCart({ id: 2, name: "Shirt", price: 599, img: Shirt2 })}
              className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
              Add to Cart
            </button>
            <button
              className="mt-2 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
               Buy Now
            </button>
         </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2 overflow-hidden">
          <img
            src={Oversize}
            className="w-full h-60 object-cover"
            alt="tshirt"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Oversize T-Shirt</h3>
            <p className="text-gray-500 text-sm">Soft & breathable</p>
            <p className="text-green-600 font-bold text-xl mt-2">₹399</p>

           
         <div className="mt-4 flex gap-3">
            <button
              onClick={() => addToCart({ id: 3, name: "Oversize T-Shirt", price: 399, img: Oversize })}
              className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
              Add to Cart
            </button>
             <button
              className="mt-2 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
               Buy Now
            </button>
         </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2 overflow-hidden">
          <img
            src={Jeansimg}
            className="w-full h-60 object-cover"
            alt="tshirt"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Stylish Jeans</h3>
            <p className="text-gray-500 text-sm">Trendy design</p>
            <p className="text-green-600 font-bold text-xl mt-2">₹699</p>

            <button 
              onClick={() => addToCart({ id: 4, name: "Stylish Jeans", price: 699, img: Jeansimg })}
              className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2 overflow-hidden">
          <img
            src={Jeansimg2}
            className="w-full h-60 object-cover"
            alt="tshirt"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Simple Jeans</h3>
            <p className="text-gray-500 text-sm">Perfect for winter</p>
            <p className="text-green-600 font-bold text-xl mt-2">₹799</p>

            <button 
              onClick={() => addToCart({ id: 5, name: "Simple Jeans", price: 799, img: Jeansimg2 })}
              className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2 overflow-hidden">
          <img
           src={Shirt3}
           className="w-full h-60 object-cover"
           alt="tshirt"
           />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Shirt</h3>
            <p className="text-gray-500 text-sm">Lightweight & breathable</p>
            <p className="text-green-600 font-bold text-xl mt-2">₹549</p>

            <button 
              onClick={() => addToCart({ id: 6, name: "Shirt", price: 549, img: Shirt3 })}
              className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Men;