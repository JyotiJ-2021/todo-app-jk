"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const [inputs, setInputs] = useState({});
  const [showMessage, setMessage] = useState();

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/login", inputs)
      .then((res) => {
        if (res.data.message === "User found") {
          router.push("/");
          setInputs({});
        } else {
          setMessage("You are not logged in yet, please try to register first");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setMessage();

    const name = e.target.name;
    const value = e.target.value;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <div className="mb-4 ">
          <label
            className="block text-gray-800 text-left text-sm  mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full px-3 py-2 border text-sm  rounded text-gray-700"
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            required
            value={inputs.email || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-800 text-left text-sm  mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full px-3 py-2 border text-sm rounded text-gray-700"
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            required
            value={inputs.password || ""}
            onChange={handleChange}
          />
        </div>
        <button
          className="w-full bg-sky-800 text-white font-semibold py-2 rounded hover:bg-sky-600"
          type="submit"
        >
          Submit
        </button>
        <div className="text-center text-sm mt-4">
          <Link href="/register" variant="body2">
            Don't have an account ? Register
          </Link>
        </div>
        <div className="mt-4">
          {showMessage && (
            <div className="bg-white text-gray-500 p-4 text-sm shadow-md rounded-lg animate-fade-in">
              {showMessage}
              <div className="text-center">or</div>
              <span className="text-red-700">
                Invalid username or password.
              </span>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
