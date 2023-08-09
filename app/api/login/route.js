import prisma from "../../libs/prismadb"
import { NextResponse } from "next/server"

export const POST = async (request) => {
  try {
    const body = await request.json()
    const { email, password } = body

    const users = await prisma.users.findUnique({
      where: {
        email,
        password,
      },
    })

    if (users) {
      return NextResponse.json({ message: "User found" }, { status: 200 })
    } else {
      return NextResponse.json({ message: "User not found" }, { status: 200 })
    }
  } catch (err) {
    console.log(err)
    return NextResponse.json(
      { message: "User not found", err },
      { status: 500 }
    )
  }
}
