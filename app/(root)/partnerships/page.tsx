import Hero from '@/components/Hero'
import PartnershipFocus from '@/components/partnership/PartnershipFocus'
import PartnershipHero from '@/components/partnership/PartnershipHero'
import PartnershipOverview from '@/components/partnership/PartnershipOverview'
import StrategicPartners from '@/components/partnership/StrategicPartners'

const page = () => {
  return (
    <div className="w-full bg-background space-y-4 lg:space-y-8 xl:space-y-20">
      <Hero first="Our" second="Partners" />
      <PartnershipHero/>
      <PartnershipOverview/>
      <StrategicPartners/>
      <PartnershipFocus/>
    </div>
  )
}

export default page