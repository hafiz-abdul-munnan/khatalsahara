import React from 'react'
import Herocontainer from './components/Herocontainer'
import Footer from '../../global/footer/Footer'
import Header from '../../global/header/Header'
import Contactboxes from './components/Contactboxes'
import ReachOutUs from './components/ReachOutUs'
const ContactUsMaincomponent = () => {
  return (
    <div>
      <Header/>
      <Herocontainer/>
      <Contactboxes/>
      <ReachOutUs/>
      <Footer/>
    </div>
  )
}

export default ContactUsMaincomponent
