import React from 'react'
import Herocomponents from './components/Herocomponents'
import SecondBoxComponent from './components/SecondBoxComponent'
import ForthBoxesComponents from './components/ForthBoxesComponents'
import CTA from '../../global/Components/CTA'
import Footer from '../../global/footer/Footer'
import ReachOutToUs from '../../global/Components/ReachOutToUs'
import Header from '../../global/header/Header'
import StepsMadeEasier from '../../global/Components/StepsMadeEasier'


const HomeMaincomponent = () => {
  return (
    <div>
      <Header/>
      <Herocomponents/>
      <SecondBoxComponent/>
      <ForthBoxesComponents/>
      <StepsMadeEasier/>
      <CTA/>
      <ReachOutToUs/>
      <Footer/>
    </div>
  )
}

export default HomeMaincomponent
