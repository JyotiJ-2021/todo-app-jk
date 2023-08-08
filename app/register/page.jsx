"use client"
import React, { useState } from "react"

const Register = () => {
  const [inputs, setInputs] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs)
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputs((prevState) => ({ ...prevState, [name]: value }))
  }
  return (
    <div className="max-w-lg mx-auto text-gray-800">
      <form className="mb-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl text-white font-semibold mb-4">Sign Up</h2>
        <div className="mb-4">
          <label
            className="block text-gray-300 text-left text-sm  mb-2"
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
        <div className="mb-4">
          <label
            className="block text-gray-300 text-left text-sm  mb-2"
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
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-300 text-left text-sm  mb-2"
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
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-300 text-left text-sm  mb-2"
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
            value={inputs.country || ""}
            onChange={handleChange}
          >
            <option disabled selected>
              Select your country
            </option>
            <option value={"hello"}>hello</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-300 text-left text-sm  mb-2"
            htmlFor="state"
          >
            State
          </label>
          <input
            className="w-full px-3 py-2 border rounded text-sm"
            type="text"
            id="state"
            name="state"
            placeholder="Enter State"
            required
            value={inputs.state || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-300 text-left text-sm  mb-2"
            htmlFor="gender"
          >
            Gender
          </label>
          <div className="flex items-center">
            <input type="radio" id="male" name="gender" value="male" required />
            <label
              className="block text-gray-300 text-left text-sm"
              htmlFor="male"
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
              required
            />
            <label
              className="block text-gray-300 text-left text-sm"
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
            />
            <label
              className="block text-gray-300 text-left text-sm"
              htmlFor="other"
            >
              Other
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-300 text-left text-sm  mb-2"
            htmlFor="contactNumber"
          >
            Contact Number
          </label>
          <input
            className="w-full px-3 py-2 border rounded text-sm"
            type="tel"
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
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Register
