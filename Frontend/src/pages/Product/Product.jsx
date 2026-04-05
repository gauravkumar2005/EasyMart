import { Link } from "react-router-dom";

function Product() {
    return(
        <section className=" w-screen h-130 bg-gray-200">
           <div>
           <h2 className=" p-8 text-3xl text-black  flex items-center justify-center font-extrabold">Explore Categories</h2>
           <div>
            <ul className="grid grid-cols-3 gap-10 ml-20 mr-20">
                 <li> <Link to="/men" className=" p-15 bg-white text-2xl flex items-center justify-center  rounded-xl shadow-md">Men</Link></li>
                 <li><Link to="/tshirt" className=" p-15 bg-white text-2xl flex items-center justify-center  rounded-xl shadow-md">T-Shirts</Link></li>
                 <li><Link to="/shirts" className=" p-15 bg-white text-2xl flex items-center justify-center  rounded-xl shadow-md">Shirts</Link></li>
                 <li><Link to="/jeans"  className=" p-15 bg-white text-2xl flex items-center justify-center  rounded-xl shadow-md">Jeans</Link></li>
                 <li><Link to="/women" className=" p-15 bg-white text-2xl flex items-center justify-center  rounded-xl shadow-md">Women</Link></li>
                 <li><Link  to="/kids"  className=" p-15 bg-white text-2xl flex items-center justify-center  rounded-xl shadow-md">Kids</Link></li>
            </ul>
           </div>
           </div>
        </section>
    );
}

export default Product;