import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { signupUser } from "../api/authApi";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      await signupUser(form);
      alert("Signup successful");
      navigate("/login");
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <>
      <Navbar />

      <main className="max-w-md mx-auto px-10 py-20">
        <h2 className="text-3xl font-semibold mb-6">Create Account</h2>

        <div className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            className="border rounded-md px-4 py-2 w-full"
            onChange={handleChange}
          />

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

          <Button onClick={handleSignup}>Sign Up</Button>

          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Login
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
