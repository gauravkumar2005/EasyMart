import Hero from "../../assets/Hero.png";

function Home() {
    return(
  <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-20 bg-gradient-to-r from-gray-100 to-gray-200">

  {/* 🔹 Left Content */}
  <div className="max-w-xl text-center md:text-left">
    
    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
      Welcome to <br />
      <span className="text-red-500">EasyMart</span>
    </h1>

    <p className="mt-6 text-lg text-gray-600">
      Discover the best products at unbeatable prices. Shop smarter, faster, and easier with EasyMart.
    </p>

    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
      
      <button className="px-6 py-3 text-lg font-semibold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 hover:scale-105 transition duration-300">
        Explore Now
      </button>

      <button className="px-6 py-3 text-lg font-semibold text-red-500 border-2 border-red-500 rounded-lg hover:bg-red-500 hover:text-white transition duration-300">
        View Deals
      </button>

    </div>
  </div>

  {/* 🔹 Right Image */}
  <div className="mt-10 md:mt-0">
    <img
      src={Hero}
      alt="Shopping Illustration"
      className="w-[300px] md:w-[500px] lg:w-[600px] drop-shadow-lg"
    />
  </div>

</section>
    )
}

export default Home;