import Image from "next/image"
import TagBtn from "../TagBtn"

const About = () => {
    return (
        <section className=" py-10 md:py-16 lg:py-20 px-4 sm:px-8 lg:px-10">

            <div className="mb-3 sm:mb-4">
                <TagBtn name="About us" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                <div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary leading-tight">
                        Building Innovative Businesses <br />
                        Across Multiple Industries
                    </h1>

                    <div className="w-full h-px bg-divider my-5 sm:my-6"></div>

                    <p className=" text-text-secondary text-sm sm:text-base leading-relaxed max-w-xl">
                        JW Global Group is a multi-sector business organization focused on
                        developing innovative and sustainable ventures across different
                        industries. The group operates through independent divisions that
                        focus on specific sectors while maintaining a unified vision of
                        growth, responsibility, and excellence.
                    </p>

                </div>

                <div className="relative lg:border-l border-divider lg:pl-10">

                    <div className="relative w-full h-65 sm:h-80 lg:h-85 rounded-sm overflow-hidden">
                        <Image
                            src="/hero.png"
                            alt="Business meeting"
                            fill
                            className="object-cover"
                        />
                    </div>

                </div>

            </div>


        </section>
    )
}

export default About