"use client"
import { countries } from "@/utils/country"
import React, { useState } from "react"
import axios from "axios"

const Register = () => {
  const [inputs, setInputs] = useState({})
  const [state, setState] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .post("/api/register", inputs)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setInputs({})
        setState([])
      })
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setInputs((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleCountry = (e) => {
    const getcountryId = e.target.value
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
    const getState = countries.find(
      (country) => country.country === getcountryId
    ).states
    setState(getState)
  }

  console.log(inputs)

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
            onChange={(e) => handleCountry(e)}
          >
            {countries.map((item, i) => {
              return (
                <option key={i} value={item.country}>
                  {item.country}
                </option>
              )
            })}
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-300 text-left text-sm  mb-2"
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
              )
            })}
          </select>
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
              onChange={handleChange}
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
            type="number"
            id="contactNumber"
            name="contactNumber"
            placeholder="Enter Contact Number"
            required
            value={inputs.contactNumber || null}
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
