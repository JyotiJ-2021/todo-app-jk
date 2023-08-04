import React from "react"

const ContactPage = () => {
  return (
    <div>
      <h4 className="text-2xl pb-8">Join Our Team</h4>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label
            for="name"
            className="block text-gray-300 text-left text-sm  mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full  text-sm  px-3 py-2 border rounded-lg focus:outline-none  focus:border-sky-800"
            placeholder="John Doe"
          />
        </div>
        <div className="mb-4">
          <label
            for="email"
            className="block text-gray-300 text-left text-sm  mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full  text-sm  px-3 py-2 border rounded-lg focus:outline-none  focus:border-sky-800"
            placeholder="john@example.com"
          />
        </div>
        <div className="mb-4">
          <label
            for="message"
            className="block text-gray-300 text-left text-sm  mb-2"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full text-sm px-3 py-2 border rounded-lg resize-none focus:outline-none focus:border-sky-800"
            placeholder="Write your message here"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-sky-900 hover:bg-sky-700 text-white  py-2 px-4 rounded focus:outline-none  focus:border-sky-800"
        >
          Connect
        </button>
      </form>
    </div>
  )
}

export default ContactPage
