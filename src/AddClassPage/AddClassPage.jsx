import React from 'react'
import NavAddClass from '../Component/AddClassPage/NavAddClass'
import Navbar from '../Component/Navbar'
import Header from '../Component/Header'
import HeroAddClass from '../Component/AddClassPage/HeroAddClass'
import AddClass from '../Component/AddClassPage/AddClass'
import Faq from '../Component/AddClassPage/FAQ'


const AddClassPage = () => {
  return (
    <div>
        <Header />
        <Navbar />
        {/* <Faq /> */}
        <NavAddClass/>
        <HeroAddClass />
        <AddClass/>
    </div>
  )
}

export default AddClassPage