import Image from "next/image"
import TagBtn from "../TagBtn"

const partners = [
  {
    label: "Strategic Partner",
    name: "Chardikla Technical Services LLC (Dubai)",
    description:
      "Chardikla Technical Services LLC is an international partner involved in skill-based workforce development and overseas placement services. Through this collaboration, JW Global Group supports professional training and employment opportunities for individuals seeking careers abroad.",
    image: "/hero.png",
    focus: [
      "Skill-based workforce training",
      "Overseas job placement",
      "International career opportunities"
    ]
  }
]

const StrategicPartners = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-10">

      <div className="mb-4 sm:mb-6">
          <TagBtn name="Strategic Partners" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {partners.map((partner, index) => (
            <div
              key={index}
              className="group border border-divider rounded-sm overflow-hidden bg-card hover:shadow-lg transition"
            >

              <div className="relative w-full h-44 bg-muted">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-4 space-y-4">

                <span className="text-xs uppercase tracking-wide text-accent font-medium">
                  {partner.label}
                </span>

                <h3 className="text-xl font-semibold text-primary leading-snug">
                  {partner.name}
                </h3>

                <p className="text-sm text-text-secondary leading-relaxed">
                  {partner.description}
                </p>

                <div className="pt-3 border-t border-divider">

                  <p className="text-sm font-medium text-primary mb-2">
                    Focus Areas
                  </p>

                  <ul className="text-sm text-text-secondary space-y-1">
                    {partner.focus.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-accent rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                </div>

              </div>

            </div>
          ))}

        </div>

    </section>
  )
}

export default StrategicPartners