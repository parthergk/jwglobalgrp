import Image from "next/image"
import TagBtn from "../TagBtn"

const stats = [
  {
    title: "Free Ambulance Support",
    desc: "Helping patients travel between hospitals and diagnostic centers during emergencies."
  },
  {
    title: "Community Welfare",
    desc: "Supporting underprivileged individuals and assisting patients in need."
  },
  {
    title: "Grassroots Work",
    desc: "Active community initiatives currently focused in Kashipur."
  },
  {
    title: "Environmental Care",
    desc: "Promoting nature-friendly actions like installing bird houses and small ecological projects."
  }
]

const Foundation = () => {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-10">

      {/* Section Label */}

      <div className="mb-6">
        <TagBtn name="Social Impact" />
      </div>

      {/* Heading */}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary leading-tight">
        Jeevan Rakshak <br />
        Prakriti Seva Foundation
      </h2>

      <div className="w-full h-px bg-divider my-6"></div>

      {/* Description */}

      <div className="space-y-4">
        <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-2xl">
          Jeevan Rakshak Prakriti Seva Foundation is a community-focused
          initiative dedicated to helping people in need while promoting
          compassion toward both society and nature.
        </p>

        <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-2xl">
          Through healthcare assistance, community welfare, and environmental
          initiatives, the foundation works to create meaningful impact at
          the grassroots level.
        </p>
      </div>

      {/* Image + Stats Layout */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-12 items-start">

        {/* Image */}

        <div className="relative lg:border-r border-divider lg:pr-10">
          <div className="relative w-full h-72 sm:h-80 rounded-xl overflow-hidden">
            <Image
              src="/hero.png"
              alt="Jeevan Rakshak Prakriti Seva Foundation"
              fill
              className="object-cover"
            />
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-md border border-divider bg-card hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-primary mb-2">
                {item.title}
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Foundation