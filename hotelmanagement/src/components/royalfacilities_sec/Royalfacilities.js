import React, { useRef } from "react";
import ParticlesBackground from '../ParticlesBackground';
import { useCallback } from "react";
import { loadFull } from "tsparticles";

const Royalfacilities = () => {
  const myDivRef = useRef(null); // create a ref for the div you want to apply the particle animation to
   const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
  return (
    <div className='royalfacilities col-lg-12'ref={myDivRef} >
       <ParticlesBackground container={myDivRef.current} /> {/* pass the div element as the 'container' prop */}
      <h1>Royal Facilities</h1>
      <p>Who are in extremely love with eco friendly system.</p>
      <div className='royalfacilities_sec col-lg-12 row'>
        <div className='facilities_items col-lg-4'>
          <div className='facilities_item'>
            <h5>Restaurant</h5>
            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
          </div>
        </div>
        <div className='facilities_items col-lg-4'>
          <div className='facilities_item'>
            <h5>Sports CLub</h5>
            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
          </div>
        </div>
        <div className='facilities_items col-lg-4'>
          <div className='facilities_item'>
            <h5>Sports CLub</h5>
            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
          </div>
        </div>
        <div className='facilities_items col-lg-4'>
          <div className='facilities_item'>
            <h5>Sports CLub</h5>
            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
          </div>
        </div>  
        <div className='facilities_items col-lg-4'>
          <div className='facilities_item'>
            <h5>Sports CLub</h5>
            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
          </div>
        </div>
        <div className='facilities_items col-lg-4'>
          <div className='facilities_item'>
            <h5>Swimming Pool</h5>
            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
          </div>
        </div>
      </div>
      {/* <Rooms/> */}
    </div>

  )
}

export default Royalfacilities;
