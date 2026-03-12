"use client"

import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const Header = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className="py-3 fixed top-0 left-0 w-full z-50 "
        >
            <nav className={`px-10 py-2 flex items-center gap-6 border-y border-[#D1D5DB]/80 transition-all duration-300 ${scrolled ? "bg-slate-900/70 backdrop-blur-md border-b border-white/10 shadow-md mx-10 border-none rounded-xl" : "bg-transparent"}`}>
                <div className="flex items-center gap-3 pr-6 border-r border-[#D1D5DB]/80">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={45}
                        height={45}
                    />
                    <span className="text-lg font-medium text-white/90">
                        Global Group
                    </span>
                </div>
                <div className=" flex-1 w-full flex items-center justify-between">
                    <ul className="hidden lg:flex items-center gap-8 text-base text-white/90">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/divisions">Divisions</Link></li>
                        <li><Link href="/leadership-team">Leadership & Team</Link></li>
                        <li><Link href="/partnerships">Partnerships</Link></li>
                        <li><Link href="/careers">Careers</Link></li>
                    </ul>

                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex gap-4 text-sm">
                            <Link href="#">
                                <Facebook className=" h-5 w-5 text-white" />
                            </Link>
                            <Link href="#">
                                <Twitter className=" h-5 w-5 text-white" />
                            </Link>
                            <Link href="#">
                                <Instagram className=" h-5 w-5 text-white" />
                            </Link>
                        </div>
                        <Link
                            href="/contact"
                            className="bg-white/95 text-primary px-4 py-1 rounded-md font-medium"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header