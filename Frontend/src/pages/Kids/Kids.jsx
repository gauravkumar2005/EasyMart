import { useCart } from "../../context/CartContext";

function Kids () {
  const { addToCart } = useCart();

  return(
      <section className="w-full min-h-screen bg-gradient-to-b from-yellow-100 to-pink-100 py-10 px-6">

      <h2 className="text-4xl font-bold text-center text-purple-600 mb-10">
        Kids Collection 👶
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1518837695005-2083093ee35b"
            className="w-full h-56 object-cover hover:scale-105 transition duration-300"
            alt="kids"
          />
          <div className="p-4 text-center">
            <h3 className="font-semibold text-lg">Kids T-Shirt</h3>
            <p className="text-gray-500 text-sm">Soft cotton</p>
            <p className="text-purple-600 font-bold text-xl mt-2">₹399</p>

            <div className="mt-4 flex gap-3">
             <button 
              onClick={() => addToCart({ id: 1, name: "Kids T-Shirt", price: 399, img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b" })}
              className="mt-3 w-full bg-purple-500 text-white py-2 rounded-full hover:bg-purple-600 transition">
              Add to Cart
             </button>
             <button
              className="mt-2 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
               Buy Now
             </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden relative">
          
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            New
          </span>

          <img
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9"
            className="w-full h-56 object-cover hover:scale-105 transition duration-300"
            alt="kids"
          />
          <div className="p-4 text-center">
            <h3 className="font-semibold text-lg">Kids Dress</h3>
            <p className="text-gray-500 text-sm">Cute & stylish</p>
            <p className="text-purple-600 font-bold text-xl mt-2">₹699</p>
            <button 
              onClick={() => addToCart({ id: 2, name: "Kids Dress", price: 699, img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9" })}
              className="mt-3 w-full bg-purple-500 text-white py-2 rounded-full hover:bg-purple-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522771930-78848d9293e8"
            className="w-full h-56 object-cover hover:scale-105 transition duration-300"
            alt="kids"
          />
          <div className="p-4 text-center">
            <h3 className="font-semibold text-lg">Kids Jeans</h3>
            <p className="text-gray-500 text-sm">Comfort fit</p>
            <p className="text-purple-600 font-bold text-xl mt-2">₹799</p>
            <button 
              onClick={() => addToCart({ id: 3, name: "Kids Jeans", price: 799, img: "https://images.unsplash.com/photo-1522771930-78848d9293e8" })}
              className="mt-3 w-full bg-purple-500 text-white py-2 rounded-full hover:bg-purple-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
            className="w-full h-56 object-cover hover:scale-105 transition duration-300"
            alt="kids"
          />
          <div className="p-4 text-center">
            <h3 className="font-semibold text-lg">Kids Hoodie</h3>
            <p className="text-gray-500 text-sm">Warm & cozy</p>
            <p className="text-purple-600 font-bold text-xl mt-2">₹999</p>
            <button 
              onClick={() => addToCart({ id: 4, name: "Kids Hoodie", price: 999, img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246" })}
              className="mt-3 w-full bg-purple-500 text-white py-2 rounded-full hover:bg-purple-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1593032465171-8e6b63d4c8e1"
            className="w-full h-56 object-cover hover:scale-105 transition duration-300"
            alt="kids"
          />
          <div className="p-4 text-center">
            <h3 className="font-semibold text-lg">Kids Shorts</h3>
            <p className="text-gray-500 text-sm">Summer wear</p>
            <p className="text-purple-600 font-bold text-xl mt-2">₹349</p>
            <button 
              onClick={() => addToCart({ id: 5, name: "Kids Shorts", price: 349, img: "https://images.unsplash.com/photo-1593032465171-8e6b63d4c8e1" })}
              className="mt-3 w-full bg-purple-500 text-white py-2 rounded-full hover:bg-purple-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden relative">
          
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            Sale
          </span>

          <img
            src="https://images.unsplash.com/photo-1503919545889-aef636e10ad4"
            className="w-full h-56 object-cover hover:scale-105 transition duration-300"
            alt="kids"
          />
          <div className="p-4 text-center">
            <h3 className="font-semibold text-lg">Kids Jacket</h3>
            <p className="text-gray-500 text-sm">Winter wear</p>
            <p className="text-purple-600 font-bold text-xl mt-2">₹1199</p>
            <button
              onClick={() => addToCart({ id: 6, name: "Kids Jacket", price: 1199, img: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4" })}
              className="mt-3 w-full bg-purple-500 text-white py-2 rounded-full hover:bg-purple-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Kids;