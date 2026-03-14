import TagBtn from "../TagBtn"
import { ShieldCheck, Lightbulb, Handshake, Award, Users } from "lucide-react"

const values = [
    {
        icon: ShieldCheck,
        title: "Integrity",
        desc: "Operating with transparency and ethical business practices.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        desc: "Encouraging new ideas and modern business approaches.",
    },
    {
        icon: Handshake,
        title: "Responsibility",
        desc: "Creating businesses that positively impact society.",
    },
]
const valuesb = [
    {
        icon: Award,
        title: "Quality",
        desc: "Maintaining high standards in products and services.",
    },
    {
        icon: Users,
        title: "Collaboration",
        desc: "Building strong partnerships and networks.",
    },
]

const CoreValues = () => {
    return (
        <section className="py-10 md:py-16 lg:py-20 px-4 sm:px-8 lg:px-10">

            <div className="flex justify-center mb-3 sm:mb-4">
                <TagBtn name="Core Values" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary mb-10 sm:mb-12 text-center">
                Values That Define JW Global Group
            </h2>

            <div className="grid grid-cols-2 grid-rows-3 sm:grid-rows-1 lg:grid-cols-3">

                {values.map((value, index) => {
                    const Icon = value.icon

                    return (
                        <div
                            key={index}
                            className={`
                flex flex-col items-center text-center py-5
                border-divider
                ${index === 0 ? "border-r border-b": ""}
                ${index < 3 ? "sm:border-b" : ""}
                ${index === 1 ? "lg:border-x" : ""}
                ${index === 1 ? "row-start-2 lg:row-start-1 col-start-2 border-l lg:border-l-0 border-b": ""}
                ${index === 2 ? "row-start-3 lg:row-start-1 col-start-1 lg:col-start-3 border-r lg:border-r-0 border-b": ""}
              `}
                        >

                            <Icon className="w-9 lg:w-12  h-9 lg:h-12 text-primary mb-4" />

                            <h3 className="text-lg font-semibold text-primary mb-3">
                                {value.title}
                            </h3>

                            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
                                {value.desc}
                            </p>

                        </div>
                    )
                })}

            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-2 grid-rows-2 lg:grid-rows-1">

                {valuesb.map((value, index) => {
                    const Icon = value.icon

                    return (
                        <div
                            key={index}
                            className={`
          flex flex-col items-center text-center py-5
          border-divider
          ${index === 0 ? " border-l lg:border-l-0  border-b lg:border-b-0 col-start-2 lg:row-start-1 lg:col-start-1" : ""}
          ${index === 1 ? "lg:border-l border-r lg:border-r-0  row-start-2 lg:row-start-1 col-start-1 lg:col-start-2" : ""}
        `}
                        >

                            <Icon className=" w-9 lg:w-12  h-9 lg:h-12 text-primary mb-4" />

                            <h3 className="text-lg font-semibold text-primary mb-3">
                                {value.title}
                            </h3>

                            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
                                {value.desc}
                            </p>

                        </div>
                    )
                })}

            </div>

        </section>
    )
}

export default CoreValues