import prisma from "../../libs/prismadb"
import { NextResponse } from "next/server"

export const POST = async (request) => {
  try {
    const body = await request.json()
    const { title, description } = body

    const newPsot = await prisma.post.create({
      data: {
        title,
        description,
      },
    })

    return NextResponse.json(newPsot)
  } catch (err) {
    return NextResponse.json({ message: "Post error", err }, { status: 500 })
  }
}

export const GET = async () => {
  try {
    const newPsot = await prisma.post.findMany()

    return NextResponse.json(newPsot)
  } catch (err) {
    return NextResponse.json({ message: "Get error", err }, { status: 500 })
  }
}
