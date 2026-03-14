import Intro from "@/components/divisions/Intro"
import Upcoming from "@/components/divisions/Upcoming"
import Hero from "@/components/Hero"

const page = () => {
  return (
    <div className="w-full bg-background space-y-4 lg:space-y-8 xl:space-y-20">
      <Hero first="Our" second="Business Divisions" />
      <Intro />
      <Upcoming />
    
    </div>
  )
}

export default page