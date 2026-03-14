import TagBtn from "../TagBtn"

const whyUs = [
    {
        title: "Career Growth",
        description: "Opportunities to work across diverse industries and gain valuable experience.",
    },
    {
        title: "Professional Development",
        description: "Skill training programs designed to prepare individuals for modern workplaces.",
    },
    {
        title: "Global Opportunities",
        description: "Connections with international employers and career pathways abroad.",
        
    },
    {
        title: "Collaborative Environment",
        description: "Work with a team that values innovation, teamwork, and responsibility.",

    }
]
const WhyUs = () => {
    return (
        <section className="py-10 md:py-16 lg:py-20 px-4 sm:px-8 lg:px-10">

            <div className="mb-3 sm:mb-4">
                <TagBtn name="Join Our Team" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary leading-tight">
                Build Your Career With JW Global Group
            </h2>

            <div className="w-full h-px bg-divider my-5 sm:my-6"></div>

            <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-2xl">
                We welcome talented individuals who want to grow professionally and contribute to innovative business ventures across multiple industries.
            </p>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-5 sm:my-6">

                {whyUs.map((item, index) => (
                    <div
                        key={index}
                        className="bg-card rounded-sm hover:-translate-y-1 transition duration-300 border border-divider p-4 "
                    >

                        <h3 className="text-primary font-semibold text-lg mb-3">
                            {item.title}
                        </h3>

                        <p className="text-text-secondary text-sm leading-relaxed mb-4">
                            {item.description}
                        </p>

                        {/* <ul className="space-y-1 text-sm text-text-secondary">
                            {item.highlights.map((item, i) => (
                                <li key={i}>• {item}</li>
                            ))}
                        </ul> */}

                    </div>
                ))}

            </div>

        </section>
    )
}

export default WhyUs