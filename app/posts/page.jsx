import React from "react"
async function getPostsData() {
  const res = await fetch("https://dummyjson.com/products")
  await new Promise((reslove) => setTimeout(reslove, 3000))
  return res.json()
}

const Posts = async () => {
  const posts = await getPostsData()

  return (
    <div>
      <ul>
        {posts.products.map((item, i) => {
          return <li key={i}>{item.title}</li>
        })}
      </ul>
    </div>
  )
}

export default Posts
