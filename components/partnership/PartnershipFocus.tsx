import TagBtn from "../TagBtn"

const FocusAreas = [
  {
    title: "Skill-Based Workforce Training",
    description:
      "Providing professional training programs that prepare individuals with industry-ready skills for global employment opportunities."
  },
  {
    title: "Overseas Job Placement",
    description:
      "Connecting skilled candidates with verified international employers through structured recruitment and placement programs."
  },
  {
    title: "International Career Opportunities",
    description:
      "Supporting individuals in building successful global careers through guidance, training, and strategic partnerships."
  }
]

const PartnershipFocus = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-10">

      <div className="mb-4 sm:mb-6">
          <TagBtn name="Focus Areas" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {FocusAreas.map((item, index) => (
            <div
              key={index}
              className="border border-divider rounded-sm p-4 bg-card hover:shadow-md transition"
            >

              <h3 className="text-lg font-semibold text-primary mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-text-secondary leading-relaxed">
                {item.description}
              </p>

            </div>
          ))}

        </div>


    </section>
  )
}

export default PartnershipFocus