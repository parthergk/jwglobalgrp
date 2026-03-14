import TagBtn from '../TagBtn'

const LeadershipPhilosophy = () => {
    return (
        <section className="py-16 lg:py-20 px-4 sm:px-8 lg:px-10">
            <div className="mb-3 sm:mb-4">

                <TagBtn name="Leadership Philosophy" />
            </div>
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-start">
                <div className=' space-y-5 sm:space-y-6'>
                    <h2 className="text-3xl md:text-4xl font-semibold text-primary leading-tight">
                        Guiding Principles Behind Our Leadership
                    </h2>

                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl">
                        At JW Global Group, leadership is driven by collaboration,
                        strategic thinking, and a commitment to long-term growth.
                        Our leadership team works closely across divisions to build
                        strong partnerships, create opportunities, and maintain
                        operational excellence.
                    </p>

                </div>

                <div className="space-y-6">

                    <div className="p-4 border border-divider rounded-sm bg-card">
                        <h3 className="text-lg font-semibold text-primary mb-2">
                            Strategic Vision
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            We focus on long-term opportunities and sustainable
                            business growth through careful planning and
                            strategic decision-making.
                        </p>
                    </div>

                    <div className="p-4 border border-divider rounded-sm bg-card">
                        <h3 className="text-lg font-semibold text-primary mb-2">
                            Collaboration & Partnerships
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            Strong partnerships are at the heart of our organization.
                            We actively collaborate with global partners and industry
                            leaders to expand opportunities.
                        </p>
                    </div>

                    <div className="p-4 border border-divider rounded-sm bg-card">
                        <h3 className="text-lg font-semibold text-primary mb-2">
                            Operational Excellence
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            Our leadership ensures efficient operations across
                            all divisions by maintaining high standards of
                            professionalism and accountability.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default LeadershipPhilosophy