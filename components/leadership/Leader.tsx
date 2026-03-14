import Image from "next/image"
import TagBtn from "../TagBtn"


const Leader = () => {
    return (
        <section className="py-10 md:py-16 lg:py-20 px-4 sm:px-8 lg:px-10">
            <div className="mb-6">
                <TagBtn name="Leadership & Management" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary leading-tight">
                Jeevan Rakshak <br />
                Prakriti Seva Foundation
            </h2>


                <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-2xl mt-4">
                    The leadership team at JW Global Group brings together experience, vision, and dedication to build sustainable businesses and create opportunities across industries.
                </p>
            <div className="w-full h-px bg-divider my-6"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-12 items-start">

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
                <div className="flex flex-col gap-6">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-semibold text-primary">
                            A.S GREWAL (Aman)
                        </h2>

                        <p className="text-text-secondary mt-1">
                            Founder & Visionary Leader
                        </p>
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

export default Leader