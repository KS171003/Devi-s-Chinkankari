"use client"

import Link from "next/link"
import { useCartStore } from "@/store/cartStore"

export default function Navbar() {
  const items = useCartStore((state) => state.items)

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Brand */}
        <Link
          href="/"
          className="font-serif text-xl tracking-widest"
        >
          Devi Chikankari
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-widest">
          <Link href="/">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Cart */}
        <Link
          href="/cart"
          className="border border-accent px-4 py-1 text-sm tracking-widest hover:bg-accent hover:text-black transition"
        >
          Cart ({items.length})
        </Link>

      </div>
    </nav>
  )
}