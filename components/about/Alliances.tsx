import Image from "next/image"
import TagBtn from "../TagBtn"

const certificates = [
  {
    title: "Strategic Partner",
    org: "Chardikla Technical Services LLC",
    image: "/certificates/cert1.jpg"
  },
  {
    title: "Industry Collaboration",
    org: "Global Business Network",
    image: "/certificates/cert2.jpg"
  },
  {
    title: "Business Partnership",
    org: "International Workforce Alliance",
    image: "/certificates/cert3.jpg"
  },
  {
    title: "Professional Certification",
    org: "Corporate Development Council",
    image: "/certificates/cert4.jpg"
  }
]

const Alliances = () => {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-10">

      {/* Tag */}
      <div className="mb-6">
        <TagBtn name="Partnerships" />
      </div>

      {/* Heading */}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary leading-tight">
        Certifications & Strategic Alliances
      </h2>

      <div className="w-full h-px bg-divider my-6"></div>

      <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-2xl">
        JW Global Group collaborates with trusted organizations and
        industry partners to expand global opportunities and strengthen
        its international network through strategic alliances and
        professional certifications.
      </p>

      {/* Certificates */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

        {certificates.map((item, index) => (
          <div
            key={index}
            className="border border-divider rounded-xl overflow-hidden bg-card hover:shadow-md transition"
          >
            {/* Certificate Image */}

            <div className="relative w-full h-48">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Certificate Info */}

            <div className="p-5 space-y-2">

              <h3 className="text-primary font-semibold text-lg">
                {item.title}
              </h3>

              <p className="text-text-secondary text-sm">
                {item.org}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Alliances