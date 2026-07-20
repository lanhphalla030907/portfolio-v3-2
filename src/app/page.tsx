import React from 'react'
import HomePage from '@/page/HomePage'
import { Navbar } from '@/page/Navbar'
import AboutMe from '@/page/AboutMe'
import TechStack from '@/components/TechStack'
import SelectedProjects from '@/components/SelectedProjects'
const page = () => {
  return (
    <div>
      <Navbar />
      <HomePage/>
      <AboutMe/>
      <TechStack/>
      <SelectedProjects/>
    </div>
  )
}

export default page