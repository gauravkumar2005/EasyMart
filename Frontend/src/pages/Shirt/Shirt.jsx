import Formalshirt from "../../assets/Formalshirt.jpg";
import Longshirt from "../../assets/Longshirt.jpg";
import Fitgreenshirt from "../../assets/Fitgreenshirt.jpg";
import Longshirtgirl from "../../assets/Longshirtgirl.jpg";

function Shirt () {
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
            <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
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
            <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
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
            <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1618354691321-e851c56960d1"
            className="w-full h-60 object-cover hover:scale-105 transition duration-300"
            alt="shirt"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Denim Shirt</h3>
            <p className="text-gray-500 text-sm">Stylish denim look</p>
            <p className="text-blue-600 font-bold text-xl mt-2">₹1199</p>
            <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
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
            src="https://images.unsplash.com/photo-1621072156002-e2fccdc0b176"
            className="w-full h-60 object-cover hover:scale-105 transition duration-300"
            alt="shirt"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Linen Shirt</h3>
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