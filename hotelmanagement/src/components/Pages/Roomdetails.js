import React from 'react'
import { Navigate } from 'react-router-dom'

const Roomdetails = () => {
    function book(){
        alert("Thanks for booking")
    }
    if(sessionStorage.getItem("user_id")==null){
        Navigate("/loginsignup");
    }else{
  return (
    <>
    <div className='col-lg-12 roomdetail row'>
        <div className='col-md-6 col-sm-12'>
        <h2>1 king bed</h2>
        <p>One king Hyatt Grand Bed™
48” flat screen Smart TV with Chromecast technology
Individually controlled heat and air-conditioning
Blackout curtains
Hair dryer
Pharmacopia bath toiletries
Coffeemaker
Mini Refrigerator
Iron and ironing board
In-room safe
Rollaway upon request
Crib upon request</p>
 <span style={{display:"flex"}}>
<input type="date" className='form-controll' name="" id="" />
<p style={{paddingLeft:"10px", paddingRight:"10px"}}>to</p>
<input type="date" name="" id="" />
</span>
<br />
<button className='btn btn-primary' onClick={book}>Book Now</button>
</div>
<div className='col-md-6 col-sm-12'>
<img src="images\Grand-Hyatt-Seattle-P085-City.16x9.png" style={{width:"100%",height:"300px"}} alt="" />
</div>
    </div>
    </>
  )
    }
}

export default Roomdetails