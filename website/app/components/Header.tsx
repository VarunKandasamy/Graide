"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="text-2xl font-bold text-blue-600">
            EduGrade Pro
          </Link>
        </motion.div>
        <div className="hidden md:flex space-x-4">
          <NavLink href="/features">Features</NavLink>
          <NavLink href="/testimonials">Testimonials</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/beta-access">Beta Access</NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white"
        >
          <div className="flex flex-col items-center py-4 space-y-2">
            <NavLink href="/features" onClick={() => setIsOpen(false)}>
              Features
            </NavLink>
            <NavLink href="/testimonials" onClick={() => setIsOpen(false)}>
              Testimonials
            </NavLink>
            <NavLink href="/pricing" onClick={() => setIsOpen(false)}>
              Pricing
            </NavLink>
            <NavLink href="/beta-access" onClick={() => setIsOpen(false)}>
              Beta Access
            </NavLink>
          </div>
        </motion.div>
      )}
    </header>
  )
}

const NavLink = ({ href, children, ...props }) => (
  <Link href={href} className="text-gray-600 hover:text-blue-600 transition-colors" {...props}>
    {children}
  </Link>
)

export default Header

