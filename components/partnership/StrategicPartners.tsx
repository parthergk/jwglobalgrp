import Image from "next/image"
import TagBtn from "../TagBtn"

const partners = [
  {
    label: "Strategic Partner",
    name: "Chardikla Technical Services LLC (Dubai)",
    description:
      "Chardikla Technical Services LLC is an international partner involved in skill-based workforce development and overseas placement services. Through this collaboration, JW Global Group supports professional training and employment opportunities for individuals seeking careers abroad.",
    image: "/partners/chardikla.png"
  }
]

const StrategicPartners = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-10">

      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <TagBtn name="Strategic Partners" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {partners.map((partner, index) => (
            <div
              key={index}
              className="border border-divider rounded-xl bg-card p-6 hover:shadow-md transition"
            >

              <div className="relative w-full h-16 mb-6">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>

              <p className="text-xs uppercase tracking-wide text-accent mb-2">
                {partner.label}
              </p>

              <h3 className="text-lg font-semibold text-primary mb-3">
                {partner.name}
              </h3>

              <p className="text-sm text-text-secondary leading-relaxed">
                {partner.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default StrategicPartners