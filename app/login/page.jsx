"use client"
import React, { useState } from "react"

const Login = () => {
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
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <label
            className="block text-gray-300 text-left text-sm  mb-2"
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
            className="block text-gray-300 text-left text-sm  mb-2"
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
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
