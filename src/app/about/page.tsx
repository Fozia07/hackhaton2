import React from 'react'
import Company from '../component/company'
import Vedio from '../component/vedio'
import Team from '../component/about-team'
import Section1 from '../component/section1'
import Section2 from '../component/section2'
import Views from '../component/Views'

function About() {
  return (
    <div className='max-w-screen-2xl my-10 mx-auto'>
       <Company/>
       <Section2/>
       <Views/>
       <Vedio />
       <Team />
       <Section1 />
    </div>
  )
}

export default About