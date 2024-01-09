import React from 'react'
import { IoCall } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <div className='container-fluid p-0' style={{backgroundColor:'#f3f6f9'}}>
        <div className="container">
            <nav className='d-flex  py-3 justify-content-between'>
                <div id="logo-div" style={{width:'150px'}}>
                    <img src="https://www.kamkaj.pk/Content/images/kamkajV2/logo.png" className='w-100' alt="" />
                </div>
                    <div className="navigation d-flex align-items-center">
                        <a href="/" className='text-decoration-none text-dark  mx-2 d-none d-md-inline' style={{fontWeight:'700',}} >Why KamKaj</a>
                        <a href="/" className='text-decoration-none text-dark  mx-2 text-nowrap' style={{fontWeight:'700',}} >Track Order</a>
                        <a href="/" className='text-decoration-none text-light mx-2 bg-danger ' style={{height:'40px',width:"40px",borderRadius:'50%',textAlign:'center',padding:"6px",fontWeight:'700',}}><IoCall /></a>
                    </div>
            </nav>
            <div className="header-intro">
                <h1 className='text-center py-2 ' style={{fontWeight:"700"}}>Refrigerator and Deep Freezer Repair</h1>
                <p className='text-center py-2'>Our skilled technicians are well-versed in repairing a variety of refrigerator and deep freezer models. From cooling issues to faulty compressors, we've got you covered. Trust us to keep your appliances running smoothly.</p>
            </div>
        </div>
    </div>
  )
}

export default Header