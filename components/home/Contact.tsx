import TagBtn from "../TagBtn"
import { Mail, Phone, MapPin } from "lucide-react"

const Contact = () => {
  return (
    <section className="pt-20 py-10 md:py-16 lg:py-20 px-4 sm:px-8 lg:px-10">

        <div className="mb-3 sm:mb-4">
          <TagBtn name="Contact" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">

          <div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary leading-tight mb-10 sm:mb-12">
              Let’s Connect <br /> With JW Global Group
            </h2>

            <div className="flex gap-2 mb-4 sm:mb-6">

              <div className="w-10 h-10 flex items-center justify-center">
                <Mail className="text-primary w-6 h-6" />
              </div>

              <div>
                <h4 className="text-primary font-semibold text-base sm:text-lg">Email</h4>
                <p className="text-text-secondary text-sm sm:text-base">
                  jwglobalgroup@gmail.com
                </p>
              </div>

            </div>
            <div className="flex gap-2 mb-4 sm:mb-6">

              <div className="w-10 h-10 flex items-center justify-center">
                <Phone className="text-primary w-6 h-6" />
              </div>

              <div>
                <h4 className="text-primary font-semibold text-base sm:text-lg">Phone</h4>
                <p className="text-text-secondary text-sm sm:text-base">
                  +91 7900 62 8888
                </p>
              </div>

            </div>

            <div className="flex gap-2 mb-4 sm:mb-6">

              <div className="w-10 h-10 flex items-center justify-center">
                <MapPin className="text-primary w-6 h-6" />
              </div>

              <div>
                <h4 className="text-primary font-semibold text-base sm:text-lg">Address</h4>
                <p className="text-text-secondary max-w-sm text-sm sm:text-base">
                  Manpur Road, Kachnal Gaji Near Power House Kashipur – 244713
                  Uttarakhand, India
                </p>
              </div>

            </div>

          </div>

          <div className="w-full h-80 sm:h-95 lg:h-105 rounded-sm overflow-hidden">

            <iframe
              src="https://www.google.com/maps?q=Kashipur%20Uttarakhand&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>

          </div>

        </div>


    </section>
  )
}

export default Contact