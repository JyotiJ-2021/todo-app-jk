import AddPost from "@/components/AddPost"
import PostList from "@/components/PostList"
import React from "react"

async function getData() {
  const res = await fetch(
    "https://vercel.com/jyotij-2021/todo-app-jk/api/todo",
    {
      cache: "no-store",
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

const CURD = async () => {
  const posts = await getData()

  return (
    <div>
      <h4 className="text-2xl mb-4">Todo List</h4>
      <AddPost />
      <PostList posts={posts} />
    </div>
  )
}

export default CURD
