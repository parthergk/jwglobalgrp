import Hero from "@/components/Hero"
import Leader from "@/components/leadership/Leader"

const page = () => {
  return (
    <div className="w-full bg-background space-y-4 lg:space-y-8 xl:space-y-20">
      <Hero first="Meet" second="Our Team" /> 
      <Leader/>   
    </div>
  )
}

export default page