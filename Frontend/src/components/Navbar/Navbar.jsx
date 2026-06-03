import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-white px-4 sm:px-6 md:px-10 py-3">

        {/* Top Section */}
        <div className="flex items-center justify-between">

          <h2 className="p-2 text-2xl sm:text-3xl md:text-4xl text-blue-600 font-extrabold transition hover:scale-110 whitespace-nowrap">
            <Link to="/">EasyMart</Link>
          </h2>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-blue-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-between flex-1">

            <ul className="flex gap-7 items-center justify-center mx-auto">
              <li className="text-xl lg:text-2xl text-blue-600 font-bold transition hover:scale-110">
                <Link to="/home">Home</Link>
              </li>

              <li className="text-xl lg:text-2xl text-blue-600 font-bold transition hover:scale-110">
                <Link to="/cart">Cart</Link>
              </li>

              <li className="text-xl lg:text-2xl text-blue-600 font-bold transition hover:scale-110">
                <Link to="/products">Products</Link>
              </li>

              <li className="text-xl lg:text-2xl text-blue-600 font-bold transition hover:scale-110">
                <Link to="/contact">Contact Us</Link>
              </li>

              <li className="text-xl lg:text-2xl text-blue-600 font-bold transition hover:scale-110">
                <Link to="/about">About Us</Link>
              </li>
            </ul>

            <div className="flex gap-4 items-center text-lg lg:text-2xl font-bold text-white">
              <p className="px-3 py-1 rounded-md bg-red-500 transition hover:scale-110">
                <Link to="/login">Login</Link>
              </p>

              <p className="px-3 py-1 rounded-md bg-red-500 transition hover:scale-110">
                <Link to="/sign">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4">

            <ul className="flex flex-col gap-4 items-center text-center">
              <li className="text-lg text-blue-600 font-bold">
                <Link to="/home">Home</Link>
              </li>

              <li className="text-lg text-blue-600 font-bold">
                <Link to="/cart">Cart</Link>
              </li>

              <li className="text-lg text-blue-600 font-bold">
                <Link to="/products">Products</Link>
              </li>

              <li className="text-lg text-blue-600 font-bold">
                <Link to="/contact">Contact Us</Link>
              </li>

              <li className="text-lg text-blue-600 font-bold">
                <Link to="/about">About Us</Link>
              </li>
            </ul>

            <div className="flex flex-col gap-3 mt-4 items-center text-white font-bold">
              <p className="px-4 py-2 rounded-md bg-red-500">
                <Link to="/login">Login</Link>
              </p>

              <p className="px-4 py-2 rounded-md bg-red-500">
                <Link to="/sign">Sign Up</Link>
              </p>
            </div>

          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;