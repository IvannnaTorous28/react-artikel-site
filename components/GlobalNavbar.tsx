"use client"
import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react"
import SidebarSlider from "@/components/SidebarSlider"
import { GiHamburgerMenu } from "react-icons/gi"

export default function GlobalNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      {/* Hamburger menu icon button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded"
        onClick={() => setIsSidebarOpen(true)}
      >
        <GiHamburgerMenu size={24} />
      </button>
      <Link
         href="/login"
         className="fixed top-4 right-4 z-50 p-2 text-gray-700 hover:text-gray-900"
        >
        <FaRegUserCircle size={28} />
       </Link>
      {/* SidebarSlider component */}
      <SidebarSlider isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>
        <nav className="flex flex-col space-y-4">
          <a href="/home" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/login" className="hover:underline">Login</a>
          <a href="/page-1" className="hover:underline">Artikel-1</a>
          <a href="/page-2" className="hover:underline">Artikel-2</a>
          <a href="/page-3" className="hover:underline">Artikel-3</a>
        </nav>
      </SidebarSlider>
    </>
  )
}
