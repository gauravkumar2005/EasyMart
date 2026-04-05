import { Link } from 'react-router-dom';

 function Navbar()  {
 return(
<>
   <div  className="w-screen h-16 bg-white flex items-center justify-around text-3xl">
        
        <h2 className="p-2  text-4xl  text-blue-600 font-extrabold hover:scale-120">
          <Link to="/">EasyMart</Link>
          </h2>
       
        <ul className="flex gap-7 items-center justify-center">
        <li className="text-2xl  text-blue-600  font-bold  transition hover:scale-110">
           <Link to='/home'>Home</Link>
        </li>
        <li className="text-2xl  text-blue-600  font-bold  transition hover:scale-110">
          <Link to='/cart'>Cart</Link>
          </li>
        <li className="text-2xl  text-blue-600 font-bold  transition hover:scale-110">
          <Link to='/products'>Products</Link>
          </li>
        <li className="text-2xl  text-blue-600 font-bold  transition hover:scale-110">
          <Link to='/contact'>Contact Us</Link>
          </li>
        <li className="text-2xl  text-blue-600 font-bold  transition hover:scale-110">
          <Link to='/about'>About Us</Link>
          </li>
      </ul>
      <div className="flex gap-7 items-center justify-center  text-2xl font-bold text-white">
         <p className="pl-3 pr-3 pt-1 pb-1 rounded-md  bg-red-500 hover:scale-110">
          <Link to='/login'>Login</Link>
        </p>
        <p className="pl-3 pr-3 pt-1 pb-1 rounded-md  bg-red-500 hover:scale-110">
          <Link to='/sign'>Sign Up</Link>
        </p>
      </div>
 </div>
</>
  );
}

export default Navbar;