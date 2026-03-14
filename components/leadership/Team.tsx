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

const Team = () => {
  return (
    <section className=" pt-5 pb-10 md:pt-8 lg:pt-10 md:pb-16 lg:pb-20  px-4 sm:px-8 lg:px-10">

      <div className="mb-4 sm:mb-6">
        <TagBtn name="Team Members" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">

        {teamMembers.map((member, index) => (
          <div
            key={index}
            className=" rounded-sm overflow-hidden bg-card shadow-md hover:shadow-lg transition duration-300"
          >

            <div className="relative w-full h-56">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="py-4 px-3 space-y-2">

              <h3 className="text-primary font-semibold text-lg">
                {member.name}
              </h3>

              <p className=" text-sm text-accent font-medium">
                {member.role}
              </p>

              <p className="text-text-secondary text-sm line-clamp-3">
                {member.description}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Team