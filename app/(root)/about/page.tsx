import Achivements from '@/components/about/Achivements'
import Alliances from '@/components/about/Alliances'
import BusinessAreas from '@/components/about/BusinessAreas'
import Foundation from '@/components/about/Foundation'
import Hero from '@/components/about/Hero'
import Story from '@/components/about/Story'

const page = () => {
  return (
    <div className="w-full bg-background space-y-20">
      <Hero />
      <Achivements/>
      <Story />
      <BusinessAreas />
      <Foundation />
      <Alliances />
    </div>
  )
}

export default page