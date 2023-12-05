import "./home.css"
import React from 'react'
import SectionOne from './Sections/Section_One'
import SectionTwo from "./Sections/Section_Two"
import SectionThree from "./Sections/Section_Three"

const Home = () => {
  return (
    <div className='home-page' id="home" >
      <h1> Tezlik </h1>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
    </div>
  )
}

export default Home