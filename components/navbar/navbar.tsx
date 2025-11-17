import Link from "next/link"
import React from "react"

 export const Navbar = () => {
  return (
    <div className="shadow p-4 space-x-2">
      <Link href="/">Home</Link>
      <Link href="/blogs">Blogs</Link>
    </div>
  )
}

export default Navbar
