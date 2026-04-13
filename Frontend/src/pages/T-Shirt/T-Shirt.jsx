import Simpletshirt from "../../assets/Simpletshirt.jpg";

function Tshirt () {
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

            <button className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
              Add to Cart
            </button>
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

            <button className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
              Add to Cart
            </button>
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

            <button className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad"
            className="w-full h-60 object-cover"
            alt="tshirt"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Graphic T-Shirt</h3>
            <p className="text-gray-500 text-sm">Trendy design</p>
            <p className="text-green-600 font-bold text-xl mt-2">₹699</p>

            <button className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990"
            className="w-full h-60 object-cover"
            alt="tshirt"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Full Sleeve T-Shirt</h3>
            <p className="text-gray-500 text-sm">Perfect for winter</p>
            <p className="text-green-600 font-bold text-xl mt-2">₹799</p>

            <button className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2 overflow-hidden">
          <img
           src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990"
           className="w-full h-60 object-cover"
           alt="tshirt"
           />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Sports T-Shirt</h3>
            <p className="text-gray-500 text-sm">Lightweight & breathable</p>
            <p className="text-green-600 font-bold text-xl mt-2">₹549</p>

            <button className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Tshirt;