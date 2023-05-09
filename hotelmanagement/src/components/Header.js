import React, { useState, useLayoutEffect } from 'react';
import $ from 'jquery';
import Navbar from './navbar/Navbar';

const Header = () => {
  // const [showNav, setShowNav] = useState(true);

  // useLayoutEffect(() => {
  //   let prevScrollPos = window.pageYOffset;

  //   const handleScroll = () => {
  //     const currentScrollPos = window.pageYOffset;
  //     if (prevScrollPos > currentScrollPos) {
  //       setShowNav(true);
  //     } else {
  //       setShowNav(false);
  //     }
  //     prevScrollPos = currentScrollPos;
  //   };

  //   $(window).on('scroll', handleScroll);

  //   return () => {
  //     $(window).off('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <>
    <header>
    {/* className={showNav ? '' : 'hidden'} */}
        {/* <nav   >
            <Navbar/>
        </nav> */}
        <section className='headertext' > 
        
        <video src={"images/video.mp4"} style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover'}} autoPlay loop muted></video>
            <main>
              
                <h6>AWAY FROM MONOTONOUS LIFE</h6>
                <h1>Relax Your Mind</h1>
                <p>If you are looking at blank cassettes on the web, you may be very confused at the <br />
difference in price. You may see some for as low as $.17 each.</p>
            </main>
        </section>
    </header>
    </>
  )
}

export default Header