"use client"
import TagBtn from "../TagBtn"
import { Mail, MapPin, Phone } from "lucide-react"
import ContactForm from "./ContactForm"

const ContactSection = () => {


  return (
    <section className="py-16 px-4 sm:px-8 lg:px-10">

      <div className="grid lg:grid-cols-2 gap-12">

        <div className="space-y-6">
          <div className="mb-3 sm:mb-4">
            <TagBtn name="Contact Information" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary leading-tight mb-5 sm:mb-6">
            Reach Out To Us
          </h2>

          <p className="text-sm sm:text-base text-text-secondary mb-8 sm:mb-16">
            If you have any questions about our services, partnerships,
            or career opportunities, feel free to contact us.
          </p>

          <div className="space-y-4">

            <div className="flex gap-4 mb-8">

              <div className="w-10 h-10 flex items-center justify-center">
                <Mail className="text-primary w-6 h-6" />
              </div>

              <div>
                <h4 className="text-primary font-semibold">Email</h4>
                <p className="text-text-secondary">
                  jwglobalgroup@gmail.com
                </p>
              </div>

            </div>
            <div className="flex gap-4 mb-8">

              <div className="w-10 h-10 flex items-center justify-center">
                <Phone className="text-primary w-6 h-6" />
              </div>

              <div>
                <h4 className="text-primary font-semibold">Phone</h4>
                <p className="text-text-secondary">
                  +91 7900 62 8888
                </p>
              </div>

            </div>
            <div className="flex gap-4">

              <div className="w-10 h-10 flex items-center justify-center">
                <MapPin className="text-primary w-6 h-6" />
              </div>

              <div>
                <h4 className="text-primary font-semibold">Address</h4>
                <p className="text-text-secondary max-w-sm">
                  Manpur Road, Kachnal Gaji Near Power House Kashipur – 244713
                  Uttarakhand, India
                </p>
              </div>

            </div>
          </div>

        </div>

        <ContactForm />
      </div>

    </section>
  )
}

export default ContactSection