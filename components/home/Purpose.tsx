import TagBtn from "../TagBtn"
import {
  Building,
  Globe,
  BadgeCheck,
  Briefcase,
  HeartHandshake,
  Lightbulb,
} from "lucide-react"

const purposes = [
  {
    icon: Building,
    title: "Develop Successful Businesses",
    desc: "To develop successful businesses across multiple sectors",
  },
  {
    icon: Globe,
    title: "Expand Global Markets",
    desc: "To expand Indian businesses to global markets",
  },
  {
    icon: BadgeCheck,
    title: "Deliver Quality Services",
    desc: "To deliver high-quality products and services",
  },
  {
    icon: Briefcase,
    title: "Create Opportunities",
    desc: "To create employment and skill development opportunities",
  },
  {
    icon: HeartHandshake,
    title: "Support Community Welfare",
    desc: "To support community welfare and social initiatives",
  },
  {
    icon: Lightbulb,
    title: "Promote Entrepreneurship",
    desc: "To promote responsible and ethical entrepreneurship",
  },
]

const Purpose = () => {
  return (
    <section className="py-10 md:py-16 lg:py-20 px-4 sm:px-8 lg:px-10">

      <div className="max-w-6xl mx-auto">

        <div className="flex justify-center mb-6">
          <TagBtn name="Our Purpose" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary text-center">
          Guided by Vision. Driven by Purpose.
        </h2>

        <p className="text-text-secondary text-center max-w-3xl mx-auto mt-5">
          To become a globally recognized business group that builds innovative
          and sustainable enterprises while creating opportunities for
          communities and future generations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 mt-16">

          {purposes.map((item, index) => {
            const Icon = item.icon

            return (
              <div key={index} className="flex gap-4">

                <div className="w-12 h-12 rounded-full bg-divider flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>

                <div>
                  <h3 className="text-primary font-semibold mb-1">
                    {item.title}
                  </h3>

                  <p className="text-text-secondary text-sm">
                    • {item.desc}
                  </p>
                </div>

              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default Purpose