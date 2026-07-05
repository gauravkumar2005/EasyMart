import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../../api"; // axios file

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/api/signup", {
        email,
        password,
      });

      alert(res.data.message); // "User registered"
    } catch (err) {
      console.log(err);
      alert("Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      
      <form 
        onSubmit={handleSignup}
        className="bg-white p-8 rounded-xl shadow-md w-80"
      >
        <h2 className="text-2xl text-center mb-4 font-bold text-blue-600">
          Signup
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 border rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Signup
        </button>

        <p className="text-sm mt-3 text-center">
          Already have account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </form>

    </div>
  );
}

export default Signup;