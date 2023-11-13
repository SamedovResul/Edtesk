import React from 'react'
import "./demo.css"
import SectionOne from './Sections/Section_One'
import SectionTwo from './Sections/Section_Two'

const Demo = () => {
  return (
    <div className='demo-page' id='demo'>
        <SectionOne/>
        <SectionTwo/>
    </div>
  )
}

export default Demo