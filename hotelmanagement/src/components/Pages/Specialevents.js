import React from 'react'

const Specialevents = () => {
  return (
    <>
    <div className="roomimg">
        <img src="images\specialevents.jpg" alt="" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover'}} />
      </div>
      <div className='uirooms'>
    <div className='specialevents col-lg-12 col-md-6'>
      <div className='col-lg-4'>
        <h3 className='richText'>WEDDINGS</h3>
<p>The Grand Hyatt Seattle offers the elegant and dramatic Leonesa Ballroom for your wedding and reception. Smaller spaces on the 6th and 7th floors provide the opportunity for an intimate wedding rehearsal or morning after brunch. While celebrating in our timeless space, you will enjoy culinary delights from a globally inspired menu. Our events team is ready to delight you with customizable menus and presentations tailored to your preferences.</p>
<button className='eventsbtn'>WEDDING BROCHURE</button>
<button className='eventsbtn'>VIEW DETAILS</button>
      </div>

      {/* second half */}
      <div className='col-lg-8'>
      <img src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2015/09/07/0800/Grand-Hyatt-Seattle-P096-Leonessa.jpg/Grand-Hyatt-Seattle-P096-Leonessa.16x9.jpg?imwidth=1280" style={{width:"100%", height:"80vh"}} alt="" />
      </div>
    </div>

    <div className='specialevents col-lg-12'>
      <div className='col-lg-7'>
      <img src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2015/09/07/0800/Grand-Hyatt-Seattle-P098-Menzies.jpg/Grand-Hyatt-Seattle-P098-Menzies.16x9.jpg?imwidth=1280" style={{width:"100%", height:"60vh"}} alt="" />
      </div>

      <div className='col-lg-5'>
      <h3 className='richText'>MEETINGS</h3>
<p>The Grand Hyatt Seattle offers 25,000 square feet in 16 meeting spaces, including an amphitheater, boardrooms, and flexible meeting spaces. Event planning and audiovisual setup are also available.
</p>
<button className='eventsbtn'>VIEW DETAILS</button>
      </div>
    </div>

    <div className='specialevents col-lg-12'>
      <div className='col-lg-7'>
      <img src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/01/24/1505/World-of-Hyatt-P159-B2B-Meetings-Video-Conference.jpg/World-of-Hyatt-P159-B2B-Meetings-Video-Conference.4x3.jpg?imwidth=1280" style={{width:"100%", height:"60vh"}} alt="" />
      </div>

      <div className='col-lg-5'>
      <h3 className='richText'>Events have changed. So have we.</h3>
<p>Whether it’s a wedding or your company’s first face-to-face brainstorming session, Hyatt can help you create exceptional events that reflect the new world. Learn more about Together by Hyatt—our approach to bringing people together again, fueled by our purpose of care.
</p>
<button className='eventsbtn'>WHY HYATT?</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default Specialevents