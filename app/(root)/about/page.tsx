import BusinessAreas from '@/components/about/BusinessAreas'
import Hero from '@/components/about/Hero'
import Story from '@/components/about/Story'

const page = () => {
  return (
    <div className="w-full bg-background space-y-20">
     <Hero/>
     <Story/>
     <BusinessAreas/>
    </div>
  )
}

export default page