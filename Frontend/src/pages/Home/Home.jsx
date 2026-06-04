import { Link } from "react-router-dom";
import Hero from "../../assets/Hero.png";

function Home() {
    return(
  <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-20 py-8 bg-gradient-to-r from-gray-100 to-gray-200">

  <div className="max-w-xl text-center md:text-left">
    
    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
      Welcome to <br />
      <span className="text-red-500">EasyMart</span>
    </h1>

    <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg text-gray-600">
      Discover the best products at unbeatable prices. Shop smarter, faster, and easier with EasyMart.
    </p>

    <div className="mt-6 sm:mt-7 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
      
      <Link 
        to="/products"
        className="px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg font-semibold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 hover:scale-105 transition duration-300">
        Explore Now
      </Link>

      <button className="px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg font-semibold text-red-500 border-2 border-red-500 rounded-lg hover:bg-red-500 hover:text-white transition duration-300">
        View Deals
      </button>

    </div>
  </div>

  <div className="mt-8 sm:mt-10 md:mt-0 flex justify-center">
    <img
      src={Hero}
      alt="Shopping Illustration"
      className="w-56 sm:w-72 md:w-[450px] lg:w-[600px] drop-shadow-lg"
    />
  </div>

</section>
    )
}

export default Home;