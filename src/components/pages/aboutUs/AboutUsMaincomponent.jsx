import React from 'react'
import Header from '../../global/header/Header'
import Footer from '../../global/footer/Footer'
import HeroContainer from './components/HeroContainer'
import CTA from '../../global/Components/CTA'
import HaveAQuery from '../../global/Components/HaveAQuery'
import LeadingGlobal from './components/LeadingGlobal'
import JoinandBenefits from './components/JoinandBenefits'
import OurTrack from './components/OurTrack'
const AboutUsMaincomponent = () => {
  return (
    <section>
      <Header />
      <HeroContainer />
      <LeadingGlobal />
      <JoinandBenefits />
      <OurTrack/>
      <CTA />
      <HaveAQuery />
      <Footer />
    </section>
  )
}

export default AboutUsMaincomponent
