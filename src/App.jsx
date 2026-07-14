import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Sign";
import Cart from "./pages/Cart/Cart";
import About from "./pages/About/About";
import Men from "./pages/Men/Men";
import Tshirt from "./pages/T-Shirt/T-Shirt";
import Shirt from "./pages/Shirt/Shirt";
import Jeans from "./pages/Jeans/Jeans";
import Women from "./pages/Women/Women";
import Kids from "./pages/Kids/Kids";
import Help from "./pages/Help/Help";
import Settings from "./pages/Settings/Settings";
import Profile from "./pages/Profile/Profile";
import Orders from "./pages/Orders/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "products", element: <Product /> },
      { path: "cart", element: <Cart /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "login", element: <Login /> },
      { path: "sign", element: <Signup /> },
      { path: "men", element: <Men /> },
      { path: "tshirt", element: <Tshirt /> },
      { path: "shirts", element: <Shirt /> },
      { path: "jeans", element: <Jeans /> },
      { path: "women", element: <Women /> },
      { path: "kids", element: <Kids /> },
      { path: "help", element: <Help /> },
      { path: "settings", element: <Settings /> },
      { path: "profile", element: <Profile /> },
      { path: "orders", element: <Orders /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;