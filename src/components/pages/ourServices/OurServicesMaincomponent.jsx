import React from 'react'
import Header from '../../global/header/Header'
import Footer from '../../global/footer/Footer'
import HeroContainer from './components/HeroContainer'
import ComprehensiveBusiness from './components/ComprehensiveBusiness'
import CTA from '../../global/Components/CTA'
import ReachOutToUs from '../../global/Components/ReachOutToUs'
import FeaturesOffered from './components/FeaturesOffered'
import DiscoverandFeatures from './components/DiscoverandFeatures'
import StepsMadeEasier from '../../global/Components/StepsMadeEasier'
const OurServicesMaincomponent = () => {
  return (
    <section>
      <Header />
      <HeroContainer />
      <ComprehensiveBusiness/>
      <FeaturesOffered/>
      <DiscoverandFeatures/>
      <StepsMadeEasier/>
      <CTA/>
      <ReachOutToUs/>
      <Footer />
    </section>
  )
}

export default OurServicesMaincomponent
