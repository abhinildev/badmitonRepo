import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { loginUser } from "../api/authApi";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
     const res= await loginUser(form);
     localStorage.setItem("token",res.data.token)
      navigate("/book");
    } catch (err) {
        console.log("login handle error")
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <Navbar />

      <main className="max-w-md mx-auto px-10 py-20">
        <h2 className="text-3xl font-semibold mb-6">Login</h2>

        <div className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="border rounded-md px-4 py-2 w-full"
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="border rounded-md px-4 py-2 w-full"
            onChange={handleChange}
          />

          <Button onClick={handleLogin}>Login</Button>

          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to="/signup" className="underline">
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
