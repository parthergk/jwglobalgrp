import OpenPositions from '@/components/career/OpenPositions'
import WhyUs from '@/components/career/WhyUs'
import Hero from '@/components/Hero'

const page = () => {
  return (
    <div className="w-full bg-background space-y-4 lg:space-y-8 xl:space-y-20">
      <Hero first="Career" second="Opportunities" />
      <WhyUs/>
      <OpenPositions/>
    </div>
  )
}

export default page