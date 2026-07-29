import Simpletshirt from "../../assets/Simpletshirt.jpg";
import Fulltshirtgirl from "../../assets/Fulltshirtgirl.jpg";
import Oversizegirl2 from "../../assets/Oversizegirl2.jpg";
import Fittshirtgirl from "../../assets/Fittshirtgirl.jpg";

import { useCart } from "../../context/CartContext";

function Tshirt () {
   const { addToCart } = useCart();
  return(
           <section className="w-full min-h-screen bg-gray-100 py-10 px-6">

      <h2 className="text-4xl font-bold text-center text-green-600 mb-10">
        T-Shirts Collection
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2 overflow-hidden">
          <img
            src={Simpletshirt}
            className="w-full h-60 object-cover"
            alt="tshirt"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Simple T-Shirt</h3>
            <p className="text-gray-500 text-sm">Comfortable cotton wear</p>
            <p className="text-green-600 font-bold text-xl mt-2">₹499</p>

          <div className="mt-4 flex gap-3">
            <button
               onClick={() => addToCart({ id: 1, name: "Simple T-Shirt", price: 999, img: Simpletshirt})}
               className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
              Add to Cart
            </button>
            <button
             className="mt-2 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
             Shop Now
            </button>
          </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
            className="w-full h-60 object-cover"
            alt="tshirt"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Printed T-Shirt</h3>
            <p className="text-gray-500 text-sm">Stylish casual wear</p>
            <p className="text-green-600 font-bold text-xl mt-2">₹599</p>

         <div className="mt-4 flex gap-3">
          <button 
              onClick={() => addToCart({ id: 2, name: "Printed T-Shirt", price: 599, img: Fulltshirtgirl })}
              className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
              Add to Cart
            </button>
            <button
             className="mt-2 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
             Shop Now
            </button>
         </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1520975922284-9d1b54a2f3c3"
            className="w-full h-60 object-cover"
            alt="tshirt"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Plain T-Shirt</h3>
            <p className="text-gray-500 text-sm">Soft & breathable</p>
            <p className="text-green-600 font-bold text-xl mt-2">₹399</p>

            <button 
              onClick={() => addToCart({ id: 3, name: "Plain T-Shirt", price: 399, img: Plaintshirt })}
              className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2 overflow-hidden">
          <img
            src={Fulltshirtgirl}
            className="w-full h-60 object-cover"
            alt="tshirt"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Full T-Shirt</h3>
            <p className="text-gray-500 text-sm">Trendy design</p>
            <p className="text-green-600 font-bold text-xl mt-2">₹699</p>

            <button 
              onClick={() => addToCart({ id: 4, name: "Full T-Shirt", price: 699, img: Fulltshirtgirl })}
              className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2 overflow-hidden">
          <img
            src={Oversizegirl2}
            className="w-full h-60 object-cover"
            alt="tshirt"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Oversize T-Shirt</h3>
            <p className="text-gray-500 text-sm">Perfect for winter</p>
            <p className="text-green-600 font-bold text-xl mt-2">₹799</p>

            <button 
              onClick={() => addToCart({ id: 5, name: "Oversize T-Shirt", price: 799, img: Oversizegirl2 })}
              className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2 overflow-hidden">
          <img
           src={Fittshirtgirl}
           className="w-full h-60 object-cover"
           alt="tshirt"
           />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Fit T-Shirt</h3>
            <p className="text-gray-500 text-sm">Lightweight & breathable</p>
            <p className="text-green-600 font-bold text-xl mt-2">₹549</p>

            <button
              onClick={() => addToCart({ id: 6, name: "Fit T-Shirt", price: 549, img: Fittshirtgirl })}
              className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Tshirt;