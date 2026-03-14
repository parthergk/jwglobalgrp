import TagBtn from '../TagBtn'
import Image from 'next/image'
import Link from 'next/link'
const divisions = [
    {
        slug: "grand-bistro",

        logo: "/hero.png",
        title: "Grand Bistro",
        desc: "Fast-growing food service brand offering modern fast food experiences and franchise opportunities.",
    },
    {
        slug: "skill-abroad-placement",

        logo: "/hero.png",
        title: "Skill & Abroad Placement",
        desc: "Professional skill training programs and international workforce placement opportunities.",
    },
    {
        slug: "agro-spice-traders",

        logo: "/hero.png",
        title: "Agro & Spice Traders",
        desc: "Sourcing and distribution of agricultural products, spices, and food ingredients.",
    },
    {
        slug: "apke-sapno-ka-ghar",

        logo: "/hero.png",
        title: "Apke Sapno Ka Ghar",
        desc: "Real estate solutions helping clients buy, sell, and invest in properties.",
    },
    {
        slug: "dil-ki-awaaz",

        logo: "/hero.png",
        title: "Dil Ki Awaaz",
        desc: "Podcast and media platform sharing real stories and discussions across industries.",
    },
    {
        slug: "weekend-social",
        logo: "/hero.png",
        title: "Weekend Social",
        desc: "Community-driven events designed to connect people through networking and social gatherings.",
    },
]
const Intro = () => {
    return (
        <section className="py-10 md:py-16 lg:py-20 px-4 sm:px-8 lg:px-10">
            <div className="flex justify-center mb-3 sm:mb-4">
                <TagBtn name="Divisions" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary leading-tight text-center mb-5 sm:mb-6">
                Building Businesses <br /> Across Diverse Industries
            </h1>
            <p className="text-center text-text-secondary max-w-3xl mx-auto mb-8 sm:mb-16">
                JW Global Group develops and manages multiple ventures across sectors including food services, workforce development, agriculture trading, real estate, media initiatives, and community projects. Each division operates with a focused approach while contributing to the group’s overall vision of sustainable growth and opportunity creation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
                {divisions.map((item, index) => (
                    <div
                        key={index}
                        className="bg-card rounded-sm pb-4 shadow-sm hover:shadow-md transition duration-300 flex flex-col"
                    >

                        <div className="relative w-full h-48">
                            <Image
                                src={item.logo}
                                alt={item.title}
                                fill
                                className="object-cover rounded-md"
                            />
                        </div>
                        {/* Content */}
                        <div className="flex flex-col grow px-4">

                            <h3 className="text-primary font-semibold text-lg mt-4 mb-1">
                                {item.title}
                            </h3>

                            <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                {item.desc}
                            </p>

                            {/* Read More */}
                            <Link
                                href={`/division/${item.slug}`}
                                className="text-sm font-medium text-primary hover:underline mt-auto"
                            >
                                Read More →
                            </Link>

                        </div>

                    </div>
                ))}
            </div>

        </section>
    )
}

export default Intro