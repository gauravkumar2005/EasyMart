import { Link } from "react-router-dom";

function Product() {
    return(
        <section className="w-full min-h-screen bg-gray-200 px-4 sm:px-6 md:px-10 py-6">
           <div>
           <h2 className="p-4 sm:p-6 md:p-8 text-xl sm:text-2xl md:text-3xl text-black flex items-center justify-center font-extrabold text-center">
             Explore Categories
           </h2>

           <div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10">
                 
                 <li>
                   <Link to="/men" className="w-full h-32 sm:h-36 md:h-44 bg-white text-lg sm:text-xl md:text-2xl flex items-center justify-center rounded-xl shadow-md">
                     Men
                   </Link>
                 </li>

                 <li>
                   <Link to="/tshirt" className="w-full h-32 sm:h-36 md:h-44 bg-white text-lg sm:text-xl md:text-2xl flex items-center justify-center rounded-xl shadow-md">
                     T-Shirts
                   </Link>
                 </li>

                 <li>
                   <Link to="/shirts" className="w-full h-32 sm:h-36 md:h-44 bg-white text-lg sm:text-xl md:text-2xl flex items-center justify-center rounded-xl shadow-md">
                     Shirts
                   </Link>
                 </li>

                 <li>
                   <Link to="/jeans" className="w-full h-32 sm:h-36 md:h-44 bg-white text-lg sm:text-xl md:text-2xl flex items-center justify-center rounded-xl shadow-md">
                     Jeans
                   </Link>
                 </li>

                 <li>
                   <Link to="/women" className="w-full h-32 sm:h-36 md:h-44 bg-white text-lg sm:text-xl md:text-2xl flex items-center justify-center rounded-xl shadow-md">
                     Women
                   </Link>
                 </li>

                 <li>
                   <Link to="/kids" className="w-full h-32 sm:h-36 md:h-44 bg-white text-lg sm:text-xl md:text-2xl flex items-center justify-center rounded-xl shadow-md">
                     Kids
                   </Link>
                 </li>

            </ul>
           </div>
           </div>
        </section>
    );
}

export default Product;