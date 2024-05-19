import React from 'react'
import { MdDashboard } from "react-icons/md";
import '../Allcss/AdminDash.css'

const AdminDash = () => {
  return (
    <div>
      <div className='main-container'>
        <div className='main-title'>
          <h3>Dashboard</h3>
        </div>
          <div className='main-cards'>
            <div className='card'>
            <div className='card-inner'>
               <h3>Artist</h3>
               <h1>300</h1>
            </div>
            <MdDashboard className='card_icon'/>
            </div>
            <div className='card'>
            <div className='card-inner'>
               <h3>ArtWork</h3>
               <h1>106</h1>
            </div>
            <MdDashboard className='card_icon'/>

            </div>
            <div className='card'>
            <div className='card-inner'>
               <h3>Order</h3>
               <h1>300</h1>
            </div>
            <MdDashboard className='card_icon'/>
           </div>
            <div className='card'>
            <div className='card-inner'>
               <h3>Customer</h3>
               <h1>300</h1>
            </div>
            <MdDashboard className='card_icon'/>
            </div>
            <div className='card'>
            <div className='card-inner'>
               <h3>Contact</h3>
               <h1>14</h1>
            </div>
            <MdDashboard className='card_icon'/>
           </div>

          </div>
      </div>
    </div>
  )
}

export default AdminDash