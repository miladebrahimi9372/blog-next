"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Navbar = () => {
  const pathname = usePathname()
  console.log({ pathname })
  const menus = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "Blogs",
      href: "/blogs"
    }
  ]
  return (
    <div className="shadow p-4 space-x-2">
      {menus.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className={`pb-1 px-1 ${pathname === href ? " pb-1 border-b-2 border-b-sky-500 font-medium" : ""}`}
        >
          {label}
        </Link>
      ))}
    </div>
  )
}

export default Navbar
