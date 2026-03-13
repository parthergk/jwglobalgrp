import TagBtn from "../TagBtn";

const areas = [
    {
        title: "International Workforce Solutions",
        desc: "Connecting businesses with skilled professionals and global employment opportunities.",
    },
    {
        title: "Business Development & Consultancy",
        desc: "Helping organizations expand through strategic planning and market insights.",
    },
    {
        title: "Global Partnerships",
        desc: "Building strong international collaborations to expand business opportunities.",
    },
    {
        title: "Entrepreneurship & Ventures",
        desc: "Supporting innovative ideas and developing scalable ventures.",
    },
];

const BusinessAreas = () => {
    return (
        <section className=" py-20 px-4 sm:px-8 lg:px-10">
            <div className="flex justify-center mb-6">
                <TagBtn name="What We Do" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary mb-16 text-center">
                Our Business Areas
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {areas.map((area, index) => (
                    <div
                        key={index}
                        className="p-4 rounded-md border border-divider bg-card hover:shadow-md transition"
                    >
                            <h3 className="text-lg font-semibold text-primary mb-3">
                            {area.title}
                        </h3>
                            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">

                            {area.desc}
                            </p>

                    </div>
                ))}
            </div>

        </section>
    );
};

export default BusinessAreas;