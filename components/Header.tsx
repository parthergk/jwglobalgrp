"use client"

import { Facebook, Instagram, Menu, Twitter, X } from "lucide-react";
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);
    return (
        <header
            className="py-3 fixed top-0 left-0 w-full z-50 "
        >
            <nav className={`px-4 sm:px-6 lg:px-10 py-1.5 lg:py-2 flex items-center justify-between gap-6 border-y-0 lg:border-y border-[#D1D5DB]/80 transition-all duration-300 ${scrolled ? "bg-slate-900/70 backdrop-blur-md border-b border-white/10 shadow-md mx-4 lg:mx-10 border-none rounded-xl" : "bg-transparent"}`}>
                <div onClick={() => router.push("/")} className=" cursor-pointer flex items-center gap-1.5 sm:gap-3 pr-6 border-r-0 lg:border-r border-[#D1D5DB]/80">
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
                <div className=" flex-1 w-full hidden lg:flex items-center justify-between">
                    <ul className="flex items-center gap-8 text-base text-white/90">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/divisions">Divisions</Link></li>
                        <li><Link href="/leadership-team">Leadership</Link></li>
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
                            className="bg-white/95 text-primary hover:bg-gray-200 transition px-4 py-1 rounded-md font-medium"
                        >
                            Contact
                        </Link>
                    </div>
                </div>

                <div className="lg:hidden" onClick={() => setIsOpen(true)}>
                    <Menu className=" h-7 w-7 text-white" />
                </div>

            </nav>

            {isOpen && (
                <nav className="fixed inset-0 z-50 lg:hidden bg-slate-900/90 backdrop-blur-md overscroll-none">
                    <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">

                        <div className="flex items-center gap-2">
                            <Image
                                src="/logo.png"
                                alt="logo"
                                width={45}
                                height={45}
                            />
                            <span className="text-white text-lg font-medium">
                                Global Group
                            </span>
                        </div>

                        <button onClick={() => setIsOpen(false)}>
                            <X className="h-7 w-7 text-white" />
                        </button>

                    </div>

                    <ul className="flex flex-col gap-6 px-6 py-10 text-lg text-white">

                        <li>
                            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                        </li>

                        <li>
                            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                        </li>

                        <li>
                            <Link href="/divisions" onClick={() => setIsOpen(false)}>Divisions</Link>
                        </li>

                        <li>
                            <Link href="/leadership-team" onClick={() => setIsOpen(false)}>
                                Leadership & Team
                            </Link>
                        </li>

                        <li>
                            <Link href="/partnerships" onClick={() => setIsOpen(false)}>
                                Partnerships
                            </Link>
                        </li>

                        <li>
                            <Link href="/careers" onClick={() => setIsOpen(false)}>Careers</Link>
                        </li>

                    </ul>

                    <div className="px-6 mt-auto pb-10">
                        <div className="flex gap-5 mb-6">
                            <Link href="#">
                                <Facebook className="h-5 w-5 text-white" />
                            </Link>

                            <Link href="#">
                                <Twitter className="h-5 w-5 text-white" />
                            </Link>

                            <Link href="#">
                                <Instagram className="h-5 w-5 text-white" />
                            </Link>
                        </div>
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center bg-white text-slate-900 font-medium py-2 rounded-md"
                        >
                            Contact
                        </Link>
                    </div>
                </nav>
            )}
        </header>
    )
}

export default Header