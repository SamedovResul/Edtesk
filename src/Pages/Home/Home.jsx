import "./home.css"
import React from 'react'
import SectionOne from './Sections/Section_One'
import SectionTwo from "./Sections/Section_Two"

const Home = () => {
  return (
    <div className='home-page' id="home" >
        <SectionOne/>
        <SectionTwo/>
    </div>
  )
}

export default Home