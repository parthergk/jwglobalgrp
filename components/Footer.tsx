import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 pt-16 pb-8 px-4 sm:px-8 lg:px-10 border-t border-white/10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white text-2xl font-semibold mb-4">
              JW Global Group
            </h3>

            <p className="text-sm leading-relaxed max-w-sm">
              Building innovative businesses and creating opportunities across
              industries through responsible entrepreneurship.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm">

              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/divisions" className="hover:text-white transition">
                  Business Divisions
                </Link>
              </li>

              <li>
                <Link href="/leadership-team" className="hover:text-white transition">
                  Team
                </Link>
              </li>

              <li>
                <Link href="/careers" className="hover:text-white transition">
                  Careers
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              Contact Info
            </h4>

            <div className="space-y-3 text-sm">

              <p>
                Manpur Road, Kachnal Gaji Near Power House
              </p>

              <p>
                Kashipur – 244713
              </p>

              <p>
                Uttarakhand, India
              </p>

              <p className="pt-2">
                +91 7900 62 8888
              </p>

              <p>
                jwglobalgroup@gmail.com
              </p>

            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-sm flex flex-col sm:flex-row justify-between items-center gap-3">

          <p>
            © 2026 JW Global Group
          </p>

          {/* <div className="flex gap-6">

            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-white transition">
              Terms
            </Link>

          </div> */}

        </div>


    </footer>
  )
}

export default Footer