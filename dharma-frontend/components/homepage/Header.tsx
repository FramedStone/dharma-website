'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { X } from 'lucide-react'
import dbulogo from '../../app/public/pictures/dbulogo.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src={dbulogo}
              alt="DBU Logo"
              width={150}
              height={150}
            />
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-primary">主页</Link>
            <Link href="#关于大学" className="text-sm font-medium hover:text-primary">关于大学</Link>
            <Link href="#属下佛学院" className="text-sm font-medium hover:text-primary">属下佛学院</Link>
          </nav>
          <div className="hidden md:flex space-x-4">
            <Button variant="outline">Login</Button>
            <Button>Register</Button>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <span className="text-2xl">☰</span>}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#home" className="block px-3 py-2 text-base font-medium hover:bg-gray-100">Home</Link>
            <Link href="#features" className="block px-3 py-2 text-base font-medium hover:bg-gray-100">Features</Link>
            <Link href="#about" className="block px-3 py-2 text-base font-medium hover:bg-gray-100">About</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <Button variant="outline" className="mr-2 w-full">Login</Button>
              <Button className="w-full">Register</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}