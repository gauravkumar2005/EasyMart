import Oversizegirl from "../../assets/Oversizegirl.jpg";
import Tshirtgirl from "../../assets/Tshirtgirl.jpg";
import Shootgirl from "../../assets/Shootgirl.jpg";
import Shootgirl2 from "../../assets/Shootgirl2.jpg";
import Shirtgirl from "../../assets/Shirtgirl.jpg";


function Women () {
  return(
      <section className="w-full min-h-screen bg-pink-50 py-10 px-6">

      {/* 🔹 Heading */}
      <h2 className="text-4xl font-bold text-center text-pink-600 mb-10">
        Women's Collection
      </h2>

      {/* 🔹 Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* 🔸 Card 1 */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden">
  
     <img
    src={Oversizegirl}
    className="w-full h-60 object-cover hover:scale-105 transition duration-300"
    alt="Oversize Girl T-Shirt"
    />

     <div className="p-4 text-center">
    <h3 className="font-semibold text-lg">Oversized Girl T-Shirt</h3>
    <p className="text-gray-500 text-sm">Trendy & comfortable</p>
    <p className="text-pink-600 font-bold text-xl mt-2">₹599</p>

    <button className="mt-3 w-full bg-pink-500 text-white py-2 rounded-full hover:bg-pink-600 transition">
      Add to Cart
    </button>
    </div>

         </div>

        {/* 🔸 Card 2 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden">
          <img
            src={Tshirtgirl}
            className="w-full h-60 object-cover hover:scale-105 transition duration-300"
            alt="Simple Girl T-shirt"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Simple Girl T-shirt</h3>
            <p className="text-gray-500 text-sm">Ethnic wear</p>
            <p className="text-pink-600 font-bold text-xl mt-2">₹999</p>
            <button className="mt-3 w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

        {/* 🔸 Card 3 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden relative">
          
          {/* 🔥 Badge */}
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
            New
          </span>

          <img
            src={Shootgirl}
            className="w-full h-60 object-cover hover:scale-105 transition duration-300"
            alt="Girl Shoot"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Girl Shoot</h3>
            <p className="text-gray-500 text-sm">Daily wear</p>
            <p className="text-pink-600 font-bold text-xl mt-2">₹699</p>
            <button className="mt-3 w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

        {/* 🔸 Card 4 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden">
          <img
            src={Shootgirl2}
            className="w-full h-60 object-cover hover:scale-105 transition duration-300"
            alt="Girl Shoot"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Girl Shoot</h3>
            <p className="text-gray-500 text-sm">Festive wear</p>
            <p className="text-pink-600 font-bold text-xl mt-2">₹1999</p>
            <button className="mt-3 w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

        {/* 🔸 Card 5 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden">
          <img
            src={Shirtgirl}
            className="w-full h-60 object-cover hover:scale-105 transition duration-300"
            alt="Shirt girl"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Women Shirt</h3>
            <p className="text-gray-500 text-sm">Comfort fit</p>
            <p className="text-pink-600 font-bold text-xl mt-2">₹1199</p>
            <button className="mt-3 w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

        {/* 🔸 Card 6 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03"
            className="w-full h-60 object-cover hover:scale-105 transition duration-300"
            alt="jacket"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Winter Jacket</h3>
            <p className="text-gray-500 text-sm">Warm & stylish</p>
            <p className="text-pink-600 font-bold text-xl mt-2">₹2499</p>
            <button className="mt-3 w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Women;