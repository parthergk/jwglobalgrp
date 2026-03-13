import Image from "next/image"
import TagBtn from "../TagBtn"

const Leadership = () => {
    return (
        <section className="py-10 md:py-16 lg:py-20 px-4 sm:px-8 lg:px-10">

            <div className="flex justify-start mb-6">
                <TagBtn name="Leadership" />
            </div>

            <div className="border-t border-divider mb-14"></div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12">
                <div className="lg:pr-12 lg:border-r border-divider">

                    <ul className="space-y-6 text-primary font-medium text-lg">

                        <li>7+ Business Divisions</li>
                        <li>Global Partnerships</li>
                        <li>Growing Business Network</li>
                        <li>Multiple Industry Sectors</li>

                    </ul>

                    <p className="text-text-secondary mt-8 max-w-sm">
                        .....driving growth through innovation, partnerships, and opportunity.
                    </p>

                </div>

                <div className="flex flex-col gap-6">

                    <div className="flex flex-col sm:flex-row gap-6 items-start">

                        <Image
                            src="/hero.png"
                            alt="A.S Grewal"
                            width={120}
                            height={120}
                            className="rounded-md object-cover"
                        />

                        <div>
                            <h2 className="text-3xl sm:text-4xl font-semibold text-primary">
                                A.S GREWAL (Aman)
                            </h2>

                            <p className="text-text-secondary mt-1">
                                Founder & Visionary Leader
                            </p>
                        </div>

                    </div>

                    <p className="text-text-secondary leading-relaxed max-w-2xl italic">
                        “A.S Grewal (Aman) founded JW Global Group with the vision of
                        building businesses that create opportunities and long-term
                        value. Driven by entrepreneurship and innovation, he established
                        the organization to develop ventures across multiple industries
                        including food services, workforce development, agriculture
                        trade, real estate, and media initiatives. His leadership focuses
                        on responsible growth, global partnerships, and creating
                        opportunities for individuals and communities.”
                    </p>

                </div>

            </div>

        </section>
    )
}

export default Leadership