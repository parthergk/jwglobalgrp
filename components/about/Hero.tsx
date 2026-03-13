import Image from 'next/image'

const Hero = () => {
  return (
     <section className="relative z-10 w-full min-h-32 sm:min-h-48 px-4 sm:px-8 lg:px-10 pt-20 sm:pt-24 pb-4">
        <div className="absolute inset-0 -z-10 ">
          <Image
            src="/hero.png"
            alt="Business meeting"
            fill
            priority
            className="object-cover object-[65%_center] lg:object-center"
          />
        </div>
        <div className="absolute inset-0 bg-primary/35 -z-10"></div>

        <h1 className="border-l border-[#D1D5DB]/80 text-white text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-semibold lg:font-normal leading-tight text-start px-2">About<br />JW Global Group</h1>
      </section>
  )
}

export default Hero