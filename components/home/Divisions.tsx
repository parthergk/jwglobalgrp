import TagBtn from "../TagBtn"
import Image from "next/image"

const divisions = [
    {
        logo: "/divisions/grand.png",
        title: "Grand Bistro",
        desc: "Fast-growing food service brand offering modern fast food experiences and franchise opportunities.",
    },
    {
        logo: "/divisions/skill.png",
        title: "Skill & Abroad Placement",
        desc: "Professional skill training programs and international workforce placement opportunities.",
    },
    {
        logo: "/divisions/agro.png",
        title: "Agro & Spice Traders",
        desc: "Sourcing and distribution of agricultural products, spices, and food ingredients.",
    },
    {
        logo: "/divisions/ghar.png",
        title: "Apke Sapno Ka Ghar",
        desc: "Real estate solutions helping clients buy, sell, and invest in properties.",
    },
    {
        logo: "/divisions/awaaz.png",
        title: "Dil Ki Awaaz",
        desc: "Podcast and media platform sharing real stories and discussions across industries.",
    },
    {
        logo: "/divisions/ws.png",
        title: "Weekend Social",
        desc: "Community-driven events designed to connect people through networking and social gatherings.",
    },
]

const Divisions = () => {
    return (
        <section className="py-16 px-4 sm:px-8 lg:px-10">
            <div className="flex justify-center mb-6">
                <TagBtn name="Divisions" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary text-center mb-6">
                Businesses That Drive Our Growth
            </h2>
            <p className="text-center text-text-secondary max-w-3xl mx-auto mb-14">
                JW Global Group operates through multiple business divisions across
                food services, workforce development, agriculture trade, real estate,
                media, and community initiatives.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
                {divisions.map((item, index) => (
                    <div key={index} className=" flex flex-col gap-3 hover:-translate-y-0.5 transition">
                        <div className="flex gap-2 items-end">
                            <div className="w-12 h-12 rounded-md bg-divider flex items-center justify-center shrink-0">
                                <Image
                                    src={item.logo}
                                    alt={item.title}
                                    width={28}
                                    height={28}
                                    className="object-contain"
                                />
                            </div>

                            <h3 className=" text-lg text-primary font-semibold ">
                                {item.title}
                            </h3>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            {item.desc}
                        </p>
                    </div>

                ))}

            </div>

        </section>
    )
}

export default Divisions