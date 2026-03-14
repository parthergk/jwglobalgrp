import WhyUs from '@/components/career/WhyUs'
import Hero from '@/components/Hero'

const page = () => {
  return (
    <div className="w-full bg-background space-y-4 lg:space-y-8 xl:space-y-20">
      <Hero first="Career" second="Opportunities" />
      <WhyUs/>
      <div className="bg-white rounded-xl shadow-card border border-borderColor p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

  <div className="flex gap-5">

    <div className="text-primary text-2xl font-semibold">
      01
    </div>

    <div>
      <h3 className="text-lg font-semibold text-primary">
        Electrician
      </h3>

      <p className="text-sm text-text-secondary mt-1 max-w-md">
        Skilled electricians are invited to apply for training and domestic or international job opportunities.
      </p>

      <div className="flex gap-4 text-xs text-text-muted mt-3">
        <span>Location: Multiple</span>
        <span>Type: Full Time</span>
        <span>Experience: 1–3 Years</span>
      </div>
    </div>

  </div>

  <div>
    <button className="bg-primary text-white px-6 py-2 rounded-md text-sm hover:opacity-90 transition">
      Apply Now
    </button>
  </div>

</div>
    </div>
  )
}

export default page