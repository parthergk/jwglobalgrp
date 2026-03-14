import Image from "next/image"
import TagBtn from "../TagBtn"

const teamMembers = [
  {
    name: "Saiful Islam",
    role: "Strategic Finance Advisor",
    description:
      "Provides financial guidance and strategic support contributing to the growth and stability of the organization.",
    image: "/hero.png"
  },
  {
    name: "Harpreet Kaur",
    role: "Head of Training & Kitchen Operations",
    description:
      "Leads training programs and oversees kitchen operations for Grand Bistro under JW Global Group.",
    image: "/hero.png"
  },
  {
    name: "Sadab",
    role: "Administrative & Operations Executive",
    description:
      "Responsible for office management, operational coordination, financial handling, and supporting daily activities across divisions.",
    image: "/hero.png"
  },
  {
    name: "Manisha",
    role: "Business Development & Operations Executive",
    description:
      "Handles client relations, business discussions, and inquiries related to Grand Bistro franchise, skill placement programs, and real estate opportunities.",
    image: "/hero.png"
  }
]

const Team1 = () => {
  return (
    <section className="pb-10 md:pb-16 lg:pb-20 px-4 sm:px-8 lg:px-10">

      <div className="mb-6">
        <TagBtn name="Leadership Team" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group relative rounded-md overflow-hidden border border-divider"
          >

            <div className="relative w-full h-64">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/80 to-transparent p-5 text-white">

              <h3 className="text-lg font-semibold">
                {member.name}
              </h3>

              <p className="text-sm text-gray-300">
                {member.role}
              </p>

            </div>

            <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center p-6 text-center">

              <p className="text-white text-sm leading-relaxed">
                {member.description}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Team1