import TagBtn from "../TagBtn"

const ContactHero = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-10">

      <div className="flex justify-center mb-6">
        <TagBtn name="Divisions" />
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary text-center mb-6">
        Get In Touch With Our Team
      </h2>

      <p className="text-center text-text-secondary max-w-3xl mx-auto">
        We welcome inquiries from individuals, businesses, and organizations
        interested in learning more about JW Global Group, our services,
        partnerships, and career opportunities. Our team will be happy to
        assist you.
      </p>

    </section>
  )
}

export default ContactHero