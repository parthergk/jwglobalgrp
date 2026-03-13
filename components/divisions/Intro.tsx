import React from 'react'
import TagBtn from '../TagBtn'
import Image from 'next/image'
const divisions = [
    {
        logo: "/divisions/logo/grand.png",
        title: "Grand Bistro",
        desc: "Fast-growing food service brand offering modern fast food experiences and franchise opportunities.",
    },
    {
        logo: "/divisions/logo/skill.png",
        title: "Skill & Abroad Placement",
        desc: "Professional skill training programs and international workforce placement opportunities.",
    },
    {
        logo: "/divisions/logo/agro.png",
        title: "Agro & Spice Traders",
        desc: "Sourcing and distribution of agricultural products, spices, and food ingredients.",
    },
    {
        logo: "/divisions/logo/ghar.png",
        title: "Apke Sapno Ka Ghar",
        desc: "Real estate solutions helping clients buy, sell, and invest in properties.",
    },
    {
        logo: "/divisions/logo/awaaz.png",
        title: "Dil Ki Awaaz",
        desc: "Podcast and media platform sharing real stories and discussions across industries.",
    },
    {
        logo: "/divisions/ws.png",
        title: "Weekend Social",
        desc: "Community-driven events designed to connect people through networking and social gatherings.",
    },
]
const Intro = () => {
    return (
        <section className="py-10 md:py-16 lg:py-20 px-4 sm:px-8 lg:px-10">
            <div className="flex justify-center mb-6">
                <TagBtn name="Divisions" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary leading-tight text-center mb-6">
                Building Businesses <br /> Across Diverse Industries
            </h1>
            <p className="text-center text-text-secondary max-w-3xl mx-auto mb-14">
                JW Global Group develops and manages multiple ventures across sectors including food services, workforce development, agriculture trading, real estate, media initiatives, and community projects. Each division operates with a focused approach while contributing to the group’s overall vision of sustainable growth and opportunity creation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
                {divisions.map((item, index) => (
                    <div
                        key={index}
                        className="group rounded-xl overflow-hidden bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                    >

                        <div className="relative w-full h-44 bg-muted flex items-center justify-center">
                            <Image
                                src={item.logo}
                                alt={item.title}
                                width={120}
                                height={120}
                                className="object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>


                        <div className="p-6 flex flex-col grow">

                            <h3 className="text-lg font-semibold text-primary mb-3">
                                {item.title}
                            </h3>

                            <p className="text-text-secondary text-sm leading-relaxed mb-6 grow">
                                {item.desc}
                            </p>

                            <button className="w-fit text-sm font-medium text-primary px-4 py-2 rounded-md bg-muted hover:bg-primary hover:text-white transition">
                                Read More
                            </button>

                        </div>

                    </div>
                ))}
            </div>

        </section>
    )
}

export default Intro