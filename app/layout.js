import "./globals.css"
import "tailwindcss/tailwind.css"
import { Poppins } from "next/font/google"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] })

export const metadata = {
  title: "Todo App",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  `}>
        <Header />
        <div className="text-center  p-32 min-h-min"> {children}</div>
        <Footer />
      </body>
    </html>
  )
}
