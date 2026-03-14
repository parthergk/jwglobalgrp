import TagBtn from "../TagBtn"

const projects = [
    {
        title: "Agriculture & Farming",
        description: "Developing modern farming projects focused on sustainable agriculture and efficient crop production.",
        highlights: [
            "Sustainable farming practices",
            "Modern irrigation systems",
            "Organic crop cultivation"
        ]
    },
    {
        title: "Import & Export",
        description: "Expanding international trade of agricultural products, spices, and food commodities.",
        highlights: [
            "Global trade partnerships",
            "Export-quality packaging",
            "Efficient supply chain"
        ]
    },
    {
        title: "Own Food Brands",
        description: "Launching branded packaged food products including spices, pulses, and food ingredients.",
        highlights: [
            "Premium quality spices",
            "Packaged pulses (Dal)",
            "Modern food packaging"
        ]
    },
    {
        title: "Canned Food Products",
        description: "Developing ready-to-use preserved food products for domestic and international markets.",
        highlights: [
            "Long shelf-life packaging",
            "Hygienic food processing",
            "Export-ready products"
        ]
    },
    {
        title: "E-Commerce Platform",
        description: "Building a digital platform to sell company brands and partner products online.",
        highlights: [
            "Direct-to-consumer sales",
            "Online marketplace",
            "Nationwide delivery network"
        ]
    },
    {
        title: "Pure Farms Dairy",
        description: "A premium dairy initiative delivering pure, fresh, and chemical-free milk directly from farms.",
        highlights: [
            "Farm fresh milk",
            "Glass bottle packaging",
            "Daily fresh delivery"
        ]
    }
]

const Upcoming = () => {
    return (
        <section className="py-10 md:py-16 lg:py-20 px-4 sm:px-8 lg:px-10">

            <div className="mb-6">
                <TagBtn name="Upcoming Projects" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary leading-tight">
                Expanding Into New Opportunities
            </h2>

            <div className="w-full h-px bg-divider my-6"></div>

            <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-2xl">
                JW Global Group continues to expand into new sectors including agriculture, food processing, international trade, and e-commerce initiatives. These projects aim to create employment opportunities while contributing to sustainable economic development.
            </p>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-card p-6 rounded-xl hover:-translate-y-1 transition duration-300"
                    >

                        <h3 className="text-primary font-semibold text-lg mb-3">
                            {project.title}
                        </h3>

                        <p className="text-text-secondary text-sm leading-relaxed mb-4">
                            {project.description}
                        </p>

                        <ul className="space-y-1 text-sm text-text-secondary">
                            {project.highlights.map((item, i) => (
                                <li key={i}>• {item}</li>
                            ))}
                        </ul>

                    </div>
                ))}

            </div>

        </section>
    )
}

export default Upcoming