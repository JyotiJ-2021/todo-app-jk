import AddPost from "@/components/AddPost"
import PostList from "@/components/PostList"
import React from "react"

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

const CURD = async () => {
  const posts = await getData()

  return (
    <div>
      <h4>Todo List App</h4>
      <AddPost />
      <PostList posts={posts} />
    </div>
  )
}

export default CURD
