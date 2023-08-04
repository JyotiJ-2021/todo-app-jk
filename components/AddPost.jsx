"use client"
import React, { useState } from "react"
import Modal from "./Modal"
import axios from "axios"
import { useRouter } from "next/navigation"

const AddPost = () => {
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState(false)
  const [inputs, setInputs] = useState({})

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputs((prevState) => ({ ...prevState, [name]: value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setInputs({})

    axios
      .post("/api/posts", inputs)
      .then((res) => {
        console.log("hello")
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setInputs({})
        setModalOpen(false)
        router.refresh()
      })
  }
  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Add new post
      </button>
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        style={{ background: "red" }}
      >
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div
            onClick={() => setModalOpen(false)}
            className=" text-2xl text-gray-800 relative"
          >
            <h1 className="text-2xl  mb-4">Add new post</h1>
            <span className="absolute right-4 top-0"> &times;</span>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={inputs.title || ""}
              onChange={handleChange}
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Description"
              name="description"
              value={inputs.description || ""}
              onChange={handleChange}
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </div>
  )
}

export default AddPost
