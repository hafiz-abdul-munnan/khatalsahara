import React from 'react'
import Header from '../../global/header/Header'
import Footer from '../../global/footer/Footer'
import HeroContainer from './components/HeroContainer'
import CTA from '../../global/Components/CTA'
import HaveAQuery from '../../global/Components/HaveAQuery'
import ForBoxes from './components/ForBoxes'
const VisaInformationMaincomponent = () => {
  return (
    <section>
   <Header/>
   <HeroContainer/>
   <ForBoxes/>
   <CTA/>
   <HaveAQuery/>
   <Footer/>
    </section>
  )
}

export default VisaInformationMaincomponent
