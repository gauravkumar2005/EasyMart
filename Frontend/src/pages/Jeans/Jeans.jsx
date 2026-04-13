import Jeansimg from "../../assets/Jeansimg.jpg";
import Jeansimg2 from "../../assets/Jeansimg2.jpg";
import Jeansimg3 from "../../assets/Jeansimg3.jpg";

function Jeans () {
  return(
        <section className="w-full min-h-screen bg-gray-100 py-10 px-6">

      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-10">
        Men's Jeans Collection
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden">
          <img
            src={Jeansimg}
            className="w-full h-60 object-cover hover:scale-105 transition duration-300"
            alt="jeans"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Stylish Jeans</h3>
            <p className="text-gray-500 text-sm">Modern slim style</p>
            <p className="text-indigo-600 font-bold text-xl mt-2">₹1299</p>
            <button className="mt-3 w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden">
          <img
            src={Jeansimg2}
            className="w-full h-60 object-cover hover:scale-105 transition duration-300"
            alt="jeans"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Regular Fit Jeans</h3>
            <p className="text-gray-500 text-sm">Comfort everyday wear</p>
            <p className="text-indigo-600 font-bold text-xl mt-2">₹999</p>
            <button className="mt-3 w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden">
          <img
            src={Jeansimg3}
            className="w-full h-60 object-cover hover:scale-105 transition duration-300"
            alt="jeans"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Ripped Jeans</h3>
            <p className="text-gray-500 text-sm">Trendy street style</p>
            <p className="text-indigo-600 font-bold text-xl mt-2">₹1499</p>
            <button className="mt-3 w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1583005516764-9e0c2f8c1c62"
            className="w-full h-60 object-cover hover:scale-105 transition duration-300"
            alt="jeans"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Denim Jeans</h3>
            <p className="text-gray-500 text-sm">Classic blue denim</p>
            <p className="text-indigo-600 font-bold text-xl mt-2">₹1199</p>
            <button className="mt-3 w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f"
            className="w-full h-60 object-cover hover:scale-105 transition duration-300"
            alt="jeans"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Black Jeans</h3>
            <p className="text-gray-500 text-sm">Premium black style</p>
            <p className="text-indigo-600 font-bold text-xl mt-2">₹1399</p>
            <button className="mt-3 w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden relative">
          
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
            Sale
          </span>

          <img
            src="https://images.unsplash.com/photo-1604176354204-9268737828e4"
            className="w-full h-60 object-cover hover:scale-105 transition duration-300"
            alt="jeans"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Stretchable Jeans</h3>
            <p className="text-gray-500 text-sm">Flexible & comfortable</p>
            <p className="text-indigo-600 font-bold text-xl mt-2">₹1099</p>
            <button className="mt-3 w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Jeans;