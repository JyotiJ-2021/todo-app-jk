"use client"
import React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { header } from "@/app/styles/common"
const Header = () => {
  const path = usePathname()
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Posts", href: "/posts" },
    { label: "Todo", href: "/todo" },
  ]
  return (
    <div className={header.box}>
      <ul className={header.nav}>
        {navItems.map((item, i) => {
          return (
            <li key={i}>
              <Link
                href={item.href}
                className={`${
                  item.href === path ? " text-neutral-300 font-bold" : ""
                } ${header.navlink} `}
              >
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
      <div className="text-xs">
        <Link href="/login"> Login</Link> |{" "}
        <Link href="/register"> Register</Link>
      </div>
    </div>
  )
}

export default Header
