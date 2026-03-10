import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import LeadForm from '@/components/sections/LeadForm'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <LeadForm />
      <Footer />
    </main>
  )
}
