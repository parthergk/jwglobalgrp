import Image from "next/image"
import TagBtn from "../TagBtn"

const Story = () => {
    return (
        <section className=" py-10 md:py-16 lg:py-20 px-4 sm:px-8 lg:px-10">
            <div className="mb-3 sm:mb-4">
                <TagBtn name="Our Story" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                <div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary leading-tight">
                        A Vision to Build Businesses<br />
                        That Create Impact
                    </h1>

                    <div className="w-full h-px bg-divider my-5 sm:my-6"></div>

                    <p className=" text-text-secondary text-sm sm:text-base leading-relaxed max-w-xl">
                        JW Global Group was established with the vision of creating
                        innovative and scalable business ventures across multiple industries.
                        Our focus is on identifying opportunities, building strong
                        partnerships, and developing solutions that support long-term
                        growth.
                        <br />
                        Through strategic collaborations and a forward-thinking
                        approach, JW Global Group continues to expand its presence
                        while supporting entrepreneurship and global connectivity.
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

export default Story