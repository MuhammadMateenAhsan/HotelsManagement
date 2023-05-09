import React from 'react'

const Dining = () => {
  return (
    <>
    <div className="roomimg">
        <img src="images/dining.png" alt="" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover'}} />
      </div>
      <div className='uirooms'>
    <div className='diningmaindiv col-lg-12'>
      <div className='diningdiv1 col-lg-8'>
    <h2 className='richText'>Dining</h2>
    <p>Our 7th and Pine location creates endless dining opportunities for every palette. Savor succulent, seasoned meats and classic American fare at our upscale steakhouse. Nosh on New York-style sandwiches and subs at our gourmet to-go deli. Looking to discover something new? Ask our front desk for a local’s suggestion on the best up and coming dining in America’s notorious food scene.</p>
    <div className="hr1_parent">
        <hr className="hr1" />
      </div>
      </div>
      </div>

      {/* second section */}
      <div className='diningsection2 col-lg-12'>
<h3 className='display-7'>In Room Dining</h3>
<div className=' inroomdining col-lg-12'>
  {/* first half */}
  <div className='col-lg-5'>
<img src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2022/12/28/1849/SEAGH-P0209-Breakfast-In-Bed-Detail.jpg/SEAGH-P0209-Breakfast-In-Bed-Detail.4x3.jpg?imwidth=1280" style={{width:"450px", height:"250px"}} alt="" />
  </div>
  {/* second half */}
  <div className='col-lg-7'>
    <p>Cozy in your room? Spoil yourself from our new luxurious fine in-room dining menu for breakfast, or dinner all while watching a movie in bed.  Knock & Drop services also available.</p>
    <div className=''>
<table className='table table-borderless'>
  <th>Hours</th>
  <th>Menu</th>
  <tr>
    <td>6:30am-12am</td>
    <td><a href="#"> IN-ROOM DINING PDF</a></td>
  </tr>
</table>
    </div>
  </div>
</div>

      </div>

      {/* section 3 */}
      <div className='diningsection2 col-lg-12'>
<h3 className='display-7'>Ruth's Chris Steak House</h3>
<div className=' inroomdining col-lg-12'>
  {/* first half */}
  <div className='col-lg-5'>
<img src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2021/08/23/1747/SEAGH-P0175-Steakhouse-Couple.jpg/SEAGH-P0175-Steakhouse-Couple.4x3.jpg?imwidth=1280" style={{width:"450px", height:"250px"}} alt="" />
  </div>
  {/* second half */}
  <div className='col-lg-7'>
    <p>Located in the lobby of the Grand Hyatt Seattle, Ruth's Chris Steak House is the quintessential spot for the best seared and sizzled plates in Seattle.</p>
    <div className=''>
<h5>Hours</h5>
<p>Breakfast: 6:30am-10:59am daily</p>
<p>Lunch: 11am-3pm daily</p>
<p>Dinner:</p>
<p>Monday - Thursday 4pm-10pm</p>
<p>Friday-Saturday 4pm-10:30pm</p>
<p>Sunday 4pm-9pm</p>
    </div>
  </div>
</div>

      </div>

      {/* section 4 */}
      <div className='diningsection2 col-lg-12'>
<h3 className='display-7'>Starbucks</h3>
<div className=' inroomdining col-lg-12'>
  {/* first half */}
  <div className='col-lg-5'>
<img src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2021/08/23/1736/SEAGH-P0169-Lobby-Guest-Work.jpg/SEAGH-P0169-Lobby-Guest-Work.4x3.jpg?imwidth=1280" style={{width:"450px", height:"250px"}} alt="" />
  </div>
  {/* second half */}
  <div className='col-lg-7'>
    <p>The coffee you've grown to love across the nation has its roots in Seattle. Even better, grabbing your favorite classic coffee on the go is even easier with our Lobby location.</p>
   
  </div>
</div>

      </div>
      </div>
    </>
  )
}

export default Dining