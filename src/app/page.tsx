import React from 'react'
import HomePage from '@/page/HomePage'
import { Navbar } from '@/page/Navbar'
import AboutMe from '@/page/AboutMe'
import ContactPage from '@/page/ContactPage'
import TechStack from '@/components/TechStack'
import SelectedProjects from '@/components/SelectedProjects'
const page = () => {
  return (
    <div className="overflow-x-clip">
      <Navbar />
      <HomePage/>
      <AboutMe/>
      <TechStack/>
      <SelectedProjects/>
      <ContactPage/>
    </div>
  )
}

export default page
