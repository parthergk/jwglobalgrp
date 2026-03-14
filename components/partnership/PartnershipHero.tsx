import Image from "next/image"
import TagBtn from "../TagBtn"

const Story = () => {
  return (
    <section className=" py-10 md:py-16 lg:py-20 px-4 sm:px-8 lg:px-10">
      <TagBtn name="Partnerships" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-6 items-center">

        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary leading-tight">
            Building Strong Global Collaborations
          </h1>

          <div className="w-full h-px bg-divider my-6"></div>

          <p className=" text-text-secondary text-sm sm:text-base leading-relaxed max-w-xl">
            Strategic partnerships play a vital role in the growth of JW Global
            Group. By working with trusted organizations and industry partners,
            the group strengthens its capabilities in workforce development,
            international placement, and business expansion.
          </p>

        </div>

        <div className="relative lg:border-l border-divider lg:pl-10">

          <div className="relative w-full h-65 sm:h-80 lg:h-85 rounded-xl overflow-hidden">
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