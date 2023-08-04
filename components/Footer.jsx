import React from "react"

const Footer = () => {
  return (
    <footer class="bg-gray-800 py-4 fixed bottom-0 w-full">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap items-center justify-between">
          <div class="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
            <h2 class="text-white text-lg font-semibold">JOY</h2>
          </div>

          <div class="w-full md:w-1/2 lg:w-1/3">
            <h3 class="text-white text-lg font-semibold">Follow</h3>
            <div class="flex mt-2">github linkedln</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
