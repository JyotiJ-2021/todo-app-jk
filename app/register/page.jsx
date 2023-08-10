"use client";
import { countries } from "@/utils/country";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Register = () => {
  const router = useRouter();
  const [showMessage, setMessage] = useState();
  const [inputs, setInputs] = useState({});
  const [state, setState] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState();
  const [checkPassword, setCheckPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/register", inputs)
      .then((res) => {
        if (res.data.message === "Register successful") {
          router.push("/login");
          setInputs({});
          setState([]);
        } else {
          setMessage(
            "An account with this username/email already exists. Please log in or use a different email to register."
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setCheckPassword();

    const name = e.target.name;
    const value = e.target.value;

    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCountry = (e) => {
    const getcountryId = e.target.value;
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    const getState = countries.find(
      (country) => country.country === getcountryId
    ).states;
    setState(getState);
  };

  const matchPassword = (e) => {
    setConfirmPassword(e.target.value);

    if (inputs.password === e.target.value) {
      setCheckPassword("Password match");
      setTimeout(() => {
        setCheckPassword();
      }, 1000);
    } else {
      setCheckPassword("Password not match");
    }
  };

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidPassword(password) {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\-\/\\]/.test(
      password
    );

    return (
      password.length >= minLength &&
      hasUppercase &&
      hasLowercase &&
      hasNumber &&
      hasSpecialCharacter
    );
  }

  return (
    <div className="max-w-lg mx-auto text-gray-800">
      <form className="mb-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl text-gray-800 font-semibold mb-4">Sign Up</h2>
        <div className="mb-4">
          <label
            className="block text-gray-800 text-left text-sm  mb-2"
            htmlFor="name"
          >
            Name
          </label>

          <input
            className="w-full px-3 py-2 border rounded text-sm"
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
            required
            value={inputs.name || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 relative">
          <label
            className="block text-gray-800 text-left text-sm  mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full px-3 py-2 border rounded text-sm"
            type="email"
            id="email"
            name="email"
            placeholder="Enter Name"
            required
            value={inputs.email || ""}
            onChange={handleChange}
          />
          <div className="absolute -bottom-4 text-xs  text-red-400 animate-fade-in">
            {inputs.email && !isValidEmail(inputs.email) && (
              <p className="text-red-500">Email is not valid</p>
            )}
          </div>
        </div>
        <div className="mb-4 relative">
          <label
            className="block text-gray-800 text-left text-sm  mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full px-3 py-2 border rounded text-sm"
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            required
            value={inputs.password || ""}
            onChange={handleChange}
          />
          <div className="absolute -bottom-4 text-xs  text-red-400 animate-fade-in">
            {inputs.password && !isValidPassword(inputs.password) && (
              <p className="text-red-500">Password is not strong enough.</p>
            )}
          </div>
        </div>

        <div className="mb-4 relative">
          <label
            className="block text-gray-800 text-left text-sm  mb-2"
            htmlFor="confpassword"
          >
            Confirm Password
          </label>
          <input
            className="w-full px-3 py-2 border rounded text-sm"
            type="password"
            id="confpassword"
            name="confpassword"
            placeholder="Enter Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => matchPassword(e)}
          />
          <div className="absolute -bottom-4 text-xs  text-red-400 animate-fade-in">
            {checkPassword && (
              <span className="text-green-500">{checkPassword}</span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-800 text-left text-sm  mb-2"
            htmlFor="country"
          >
            Country
          </label>
          <select
            className="w-full px-3 py-2 border rounded"
            id="country"
            name="country"
            placeholder="Select Country"
            required
            onChange={(e) => handleCountry(e)}
          >
            <option selected className="block text-gray-800 text-xs ">
              Select Country
            </option>
            {countries.map((item, i) => {
              return (
                <option key={i} value={item.country}>
                  {item.country}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-800 text-left text-sm  mb-2"
            htmlFor="state"
          >
            State
          </label>
          <select
            className="w-full px-3 py-2 border rounded"
            id="state"
            name="state"
            placeholder="Select State"
            required
            onChange={(e) => handleChange(e)}
          >
            {state.map((item, i) => {
              return (
                <option key={i} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-800 text-left text-sm  mb-2"
            htmlFor="gender"
          >
            Gender
          </label>
          <div className="flex items-center">
            <input type="radio" id="male" name="gender" value="male" required />
            <label
              className="block text-gray-800 text-left text-sm"
              htmlFor="male"
              onChange={handleChange}
            >
              Male
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={handleChange}
              required
            />
            <label
              className="block text-gray-800 text-left text-sm"
              htmlFor="female"
            >
              Female
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="other"
              name="gender"
              value="other"
              required
              onChange={handleChange}
            />
            <label
              className="block text-gray-800 text-left text-sm"
              htmlFor="other"
            >
              Other
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-800 text-left text-sm  mb-2"
            htmlFor="contactNumber"
          >
            Contact Number
          </label>
          <input
            className="w-full px-3 py-2 border rounded text-sm"
            type="number"
            id="contactNumber"
            name="contactNumber"
            placeholder="Enter Contact Number"
            required
            value={inputs.contactNumber || ""}
            onChange={handleChange}
          />
        </div>
        <button
          className="w-full bg-sky-800 text-white font-semibold py-2 rounded hover:bg-sky-600"
          type="submit"
        >
          Register
        </button>

        <div className="text-center text-gray-800 text-sm mt-4">
          <Link href="/login" variant="body2">
            Already have an account ? Login
          </Link>
        </div>

        <div className="mt-4">
          {showMessage && (
            <div className="bg-white p-4 text-sm shadow-md rounded-lg animate-fade-in">
              {showMessage}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Register;
