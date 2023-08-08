import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-2 fixed bottom-0 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
            <h2 className="text-white text-lg font-semibold">JOY</h2>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 flex">
            <h3 className="text-white text-lg  ">Follow : </h3>
            <div className="flex mx-4">
              <Link href="https://github.com/JyotiJ-2021/">
                <img
                  src="/github.svg"
                  alt="logo"
                  className="bg-white w-8 h-8 mx-2"
                />
              </Link>
              <Link href="https://www.linkedin.com/in/jyoti-kumari-74b921213/">
                <img
                  src="/linkedln.png"
                  alt="logo"
                  className=" bg-white w-8 h-8 mx-2"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
