import TagBtn from "../TagBtn"

const PartnershipOverview = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-10">

      <div className="max-w-3xl mx-auto text-center space-y-6">

        <TagBtn name="Our Approach" />

        <h2 className="text-3xl md:text-4xl font-semibold text-primary">
          Why Partnerships Matter
        </h2>

        <p className="text-text-secondary leading-relaxed">
          At JW Global Group, collaboration is a key driver of sustainable
          growth. By building partnerships with global organizations and
          industry leaders, we expand our ability to provide professional
          training, international job opportunities, and cross-industry
          collaboration.
        </p>

        <p className="text-text-secondary leading-relaxed">
          These partnerships combine expertise, resources, and networks to
          create meaningful opportunities for individuals and businesses
          across multiple sectors.
        </p>

      </div>

    </section>
  )
}

export default PartnershipOverview