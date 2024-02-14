import React from 'react'
import Sidebar from '../Component/StudentCenterPage/Sidebar'
import StudentCenterDetail from '../Component/StudentCenterPage/StudentCenterDetail'
import Header from '../Component/Header'
import Navbar from '../Component/Navbar'

const StudentCenter = () => {
  return (
    <>
    <Header/>
    <Navbar />
    <div className='m-4 mt-6'>
      <div className="flex text-[14px] gap-24 mb-5">
        <div>MARSELA GRACIA</div>
        <div>ID 12020001642</div>
        <div>Star</div>
      </div>
    <div className='flex w-[70%] '>
        <StudentCenterDetail/>
        <Sidebar />
    </div>
    </div>
    </>
  )
}

export default StudentCenter