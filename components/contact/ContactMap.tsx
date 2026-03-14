import TagBtn from "../TagBtn"

const ContactMap = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-10">

      <div className="mb-4 sm:mb-6">
        <TagBtn name="Location" />
      </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-5 sm:mb-6">
          Find Our Office
        </h2>

        <div className="w-full h-100 border border-divider rounded-xl overflow-hidden">

          <iframe
            src="https://www.google.com/maps?q=Kashipur%20Uttarakhand&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>

        </div>


    </section>
  )
}

export default ContactMap