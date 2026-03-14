import ContactHero from '@/components/contact/ContactHero'
import ContactMap from '@/components/contact/ContactMap'
import ContactSection from '@/components/contact/ContactSection'
import Hero from '@/components/Hero'

const page = () => {
  return (
    <div className="w-full bg-background space-y-4 lg:space-y-8 xl:space-y-20">
      <Hero first="Our" second="Business Divisions" />
      <ContactHero/>
      <ContactSection/>
      <ContactMap/>
    </div>
    )
}

export default page