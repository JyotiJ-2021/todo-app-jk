import prisma from "../../libs/prismadb"
import { NextResponse } from "next/server"

export const POST = async (request) => {
  try {
    const body = await request.json()
    const { name, email, password, gender, country, state, contactNumber } =
      body

    const contact = JSON.parse(contactNumber)
    const users = await prisma.users.create({
      data: {
        name,
        email,
        password,
        gender,
        country,
        state,
        contactNumber: contact,
      },
    })
    await prisma.$disconnect()

    if (users) {
      return NextResponse.json(
        { message: " register successful " },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { message: " register not successful " },
        { status: 200 }
      )
    }
  } catch (err) {
    return NextResponse.json({ message: " error found ", err }, { status: 500 })
  }
}
