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
      <button onClick={() => setModalOpen(true)}>Add new post </button>
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        style={{ background: "red" }}
      >
        <form onSubmit={handleSubmit}>
          <h1>Add new post</h1>

          <input
            type="text"
            placeholder="Title"
            name="title"
            value={inputs.title || ""}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={inputs.description || ""}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </Modal>
    </div>
  )
}

export default AddPost
