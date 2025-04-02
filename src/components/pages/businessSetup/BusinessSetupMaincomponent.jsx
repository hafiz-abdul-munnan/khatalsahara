import React from 'react'
import Herocontainer from './components/Herocontainer'
import Header from '../../global/header/Header'
import Footer from '../../global/footer/Footer'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import HaveAQuery from '../../global/Components/HaveAQuery'
import FAQs from './components/FAQs'
import DubaiMainlandLicenses from './components/DubaiMainlandLicenses'
const BusinessSetupMaincomponent = () => {
  return (
    <div>
      <Header/>
      <Herocontainer/>
      <HowItWorks/>
      <Benefits/>
      <DubaiMainlandLicenses/>
      <FAQs/>
      <HaveAQuery/>
      <Footer/>
    </div>
  )
}

export default BusinessSetupMaincomponent
