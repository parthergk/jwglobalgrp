import Link from "next/link"

const Header = () => {
    return (
        <div className=' w-full'>
            <nav className=' w-full'>
                <ul className=' w-full flex gap-3'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/divisions">Divisions</Link></li>
                    <li><Link href="/leadership-team">Leadership & Team</Link></li>
                    <li><Link href="/partnerships">Partnerships</Link></li>
                    <li><Link href="/careers">Careers</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header