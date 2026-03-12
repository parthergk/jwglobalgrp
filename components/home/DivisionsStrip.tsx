import Image from "next/image"

const DivisionsStrip = () => {
  return (
    <section className="py-12 px-4 sm:px-8 lg:px-10">

      <p className="text-[#475569] text-sm md:text-base italic text-center mb-8">
        Trusted by growing businesses and global partners.
      </p>

      <div className="flex flex-wrap justify-center sm:justify-between items-center gap-5">

        <Image src="/divisions/agro.png" alt="Agro" width={200} height={80} className="h-12 sm:h-18 w-auto object-contain opacity-70 hover:opacity-100 transition" />

        <Image src="/divisions/grand.png" alt="Grand" width={200} height={80} className="h-10 sm:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition" />

        <Image src="/divisions/ghar.png" alt="Ghar" width={200} height={80} className="h-10 sm:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition" />

        <Image src="/divisions/awaaz.png" alt="Awaaz" width={200} height={80} className="h-10 sm:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition" />

        <Image src="/divisions/skill.png" alt="Skill" width={200} height={80} className="h-10 sm:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition" />

        <Image src="/divisions/ws.png" alt="WS" width={200} height={100} className="h-9 sm:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition" />

      </div>

    </section>
  )
}

export default DivisionsStrip