import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Hero from './Hero.js/Hero'
import Team from './Team/Team'
import Values from './Values/Values'
import Who from './Who/Who'
import Why from './Why/Why'

const AboutUs = () => {
  return (
    <div className="max-wrapper">
      <Header/>
        <Hero/>
        {/* <Who/>
        <Why/> */}
        <Values/>
        <Team/>
        <Footer/>
    </div>
  )
}

export default AboutUs