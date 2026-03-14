import Hero from "@/components/Hero"
import Leader from "@/components/leadership/Leader"
import Team from "@/components/leadership/Team"

const page = () => {
  return (
    <div className="w-full bg-background space-y-4 lg:space-y-8 xl:space-y-20">
      <Hero first="Meet" second="Our Team" /> 
      <Leader/>   
      <Team/>
    </div>
  )
}

export default page