import React from 'react'
import NavAddClass from '../Component/NewAddClassPage/NavAddClass'
import Navbar from '../Component/Navbar'
import Header from '../Component/Header'
import HeroAddClass from '../Component/NewAddClassPage/HeroAddClass'
import AddClass from '../Component/NewAddClassPage/AddClass'


const AddClassPage = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <NavAddClass/>
        <HeroAddClass />
        {/* <AddClass/> */}
    </div>
  )
}

export default AddClassPage