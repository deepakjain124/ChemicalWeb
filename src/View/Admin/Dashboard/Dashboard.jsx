import React from 'react'
import AdminNavbar from '../AdminNav/AdminNavbar'
import Features from './Features'

const Dashboard = () => {
  return (
   <>
    <AdminNavbar/>
    <div className='p-4'>
    <Features/>
    </div>
   </>
  )
}

export default Dashboard