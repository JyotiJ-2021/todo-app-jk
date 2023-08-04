"use client"
import React, { useState } from "react"
import Modal from "./Modal"
import axios from "axios"
import { useRouter } from "next/navigation"

const Post = ({ post }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false)
  const [edit, setEdit] = useState(post)
  const router = useRouter()
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setEdit((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .patch(`/api/posts/${post.id}`, inputs)
      .then((res) => {
        console.log("hello")
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setModalOpen(false)
        router.refresh()
      })
  }

  const handleDelete = (id) => {
    axios
      .delete(`/api/posts/${id}`)
      .then((res) => {
        console.log("hello")
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setModalDeleteOpen(false)
        router.refresh()
      })
  }

  return (
    <li key={post.id}>
      {post.title}
      {post.description}
      <button type="submit" onClick={() => setModalOpen(true)}>
        edit
      </button>
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        style={{ background: "red" }}
      >
        <form onSubmit={handleSubmit}>
          <h1>Edit new post</h1>

          <input
            type="text"
            placeholder="Title"
            name="title"
            value={edit.title || ""}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={edit.description || ""}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </Modal>
      <button type="submit" onClick={() => setModalDeleteOpen(true)}>
        delete
      </button>

      <Modal
        modalOpen={modalDeleteOpen}
        setModalOpen={setModalDeleteOpen}
        style={{ background: "red" }}
      >
        <h1>Are you sure you want to delete this post?</h1>
        <div>
          <button type="submit" onClick={() => handleDelete(post.id)}>
            Yes
          </button>
          <button type="submit" onClick={() => setModalDeleteOpen(false)}>
            No
          </button>
        </div>
      </Modal>
    </li>
  )
}

export default Post
