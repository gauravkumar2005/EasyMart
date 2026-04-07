import { Link } from 'react-router-dom';

function Navbar()  {
 return(
<>
   <div className="w-full bg-white flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 py-3 gap-3 md:gap-0">
        
        <h2 className="p-2 text-2xl sm:text-3xl md:text-4xl text-blue-600 font-extrabold transition hover:scale-110 whitespace-nowrap">
          <Link to="/">EasyMart</Link>
        </h2>
       
        <ul className="flex flex-wrap md:flex-nowrap gap-3 sm:gap-5 md:gap-7 items-center justify-center text-center">
          <li className="text-sm sm:text-base md:text-xl lg:text-2xl text-blue-600 font-bold transition hover:scale-110">
           <Link to='/home'>Home</Link>
          </li>
          <li className="text-sm sm:text-base md:text-xl lg:text-2xl text-blue-600 font-bold transition hover:scale-110">
          <Link to='/cart'>Cart</Link>
          </li>
          <li className="text-sm sm:text-base md:text-xl lg:text-2xl text-blue-600 font-bold transition hover:scale-110">
          <Link to='/products'>Products</Link>
          </li>
          <li className="text-sm sm:text-base md:text-xl lg:text-2xl text-blue-600 font-bold transition hover:scale-110">
          <Link to='/contact'>Contact Us</Link>
          </li>
          <li className="text-sm sm:text-base md:text-xl lg:text-2xl text-blue-600 font-bold transition hover:scale-110">
          <Link to='/about'>About Us</Link>
          </li>
      </ul>

      <div className="flex flex-wrap gap-2 sm:gap-4 items-center justify-center text-sm sm:text-base md:text-lg lg:text-2xl font-bold text-white">
         <p className="px-3 py-1 rounded-md bg-red-500 transition hover:scale-110 whitespace-nowrap">
          <Link to='/login'>Login</Link>
        </p>
        <p className="px-3 py-1 rounded-md bg-red-500 transition hover:scale-110 whitespace-nowrap">
          <Link to='/sign'>Sign Up</Link>
        </p>
      </div>
   </div>
</>
  );
}

export default Navbar;