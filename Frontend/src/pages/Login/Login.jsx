import { Link } from "react-router-dom";
import { useState } from "react";
import API from "../../api"; // apna api.js import karo

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // page reload rokne ke liye

    try {
      const res = await API.post("/api/login", {
        email,
        password,
      });

      alert(res.data.message); // response show

      setEmail("");
      setPassword("");

    } catch (err) {
      console.log(err);
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      
      <form 
        onSubmit={handleLogin}  // 👈 yaha connect hua backend
        autoComplete="off"
        className="h-100 w-100 p-8 rounded-xl bg-white shadow-md"
      >
        
        <h2 className=" text-3xl text-center text-blue-600 font-bold">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 mt-5 p-3 border rounded-md"
          value={email}
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)} // 👈 state
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 border rounded-md"
          value={password}
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)} // 👈 state
        />

        <button
          type="submit"
          className="w-full bg-blue-600 font-bold text-white p-3 rounded-md hover:bg-blue-700"
        >
          Login
        </button>

        <p className="text-center mt-4 text-sm">
          Don't have an account?
          <Link to="/sign" className="text-blue-600 cursor-pointer ml-1">
            Sign Up
          </Link>
        </p>

      </form>
    </div>
  );
}

export default Login;