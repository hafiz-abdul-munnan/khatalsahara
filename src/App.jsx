import React from 'react'

import HomeMaincomponent from './components/pages/home/HomeMaincomponent'
import BusinessSetupMaincomponent from './components/pages/businessSetup/BusinessSetupMaincomponent'
import OurServicesMaincomponent from './components/pages/ourServices/OurServicesMaincomponent'
import VisaInformationMaincomponent from './components/pages/visaInformation/VisaInformationMaincomponent'
import AboutUsMaincomponent from './components/pages/aboutUs/AboutUsMaincomponent'
import ContactUsMaincomponent from './components/pages/contactUs/ContactUsMaincomponent'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<HomeMaincomponent />} />
        <Route path="/business-setup" element={<BusinessSetupMaincomponent />} />
        <Route path="/our-services" element={<OurServicesMaincomponent />} />
        <Route path="/visa-information" element={<VisaInformationMaincomponent />} />
        <Route path="/about-us" element={<AboutUsMaincomponent />} />
        <Route path="/contact-us" element={<ContactUsMaincomponent />} />

      </Routes>


    </div>
  )
}

export default App
