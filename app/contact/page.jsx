"use client"
import React, { useState } from "react"
import axios from "axios"

const ContactPage = () => {
  const [inputs, setInputs] = useState({})
  const [show, setShow] = useState(false)
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setInputs((prevState) => ({ ...prevState, [name]: value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    setInputs({})

    axios
      .post("/api/contact", inputs)
      .then((res) => {
        setShow(true)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setInputs({})
      })
  }

  return (
    <div>
      <h4 className="text-2xl pb-8">Join Our Team</h4>
      {show ? (
        <p className="max-w-lg mx-auto">
          Thanks for being awesome! We have received your message and would like
          to thank you for writing to us.
        </p>
      ) : (
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-300 text-left text-sm  mb-2"
            >
              Name:
            </label>

            <input
              type="text"
              name="name"
              className="w-full text-gray-800 text-sm  px-3 py-2 border rounded-lg focus:outline-none  focus:border-sky-800"
              placeholder="Enter Name"
              value={inputs.name || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-300 text-left text-sm  mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              className="w-full text-gray-800  text-sm  px-3 py-2 border rounded-lg focus:outline-none  focus:border-sky-800"
              placeholder="Enter Email"
              value={inputs.email || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-300 text-left text-sm  mb-2"
            >
              Message:
            </label>
            <textarea
              name="message"
              rows="4"
              className="w-full text-gray-800 text-sm px-3 py-2 border rounded-lg resize-none focus:outline-none focus:border-sky-800"
              placeholder="Write your message here"
              value={inputs.message || ""}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-sky-900 hover:bg-sky-700 text-white  py-2 px-4 rounded focus:outline-none  focus:border-sky-800"
          >
            Connect
          </button>
        </form>
      )}
    </div>
  )
}

export default ContactPage
