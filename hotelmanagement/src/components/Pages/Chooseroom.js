import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Chooseroom = () => {
  const [expanded, setExpanded] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const [api, setApi] = useState([]);

const fetchapi = async()=>{
  const url = await fetch("http://127.0.0.1:8000/");
  const data = await url.json();
  setApi(data)
}

useEffect(()=>{
  fetchapi();
},[])
  const handleButtonClick = () => {
    setModalShow(true);
  };
  function handleShowMore() {
    const textDiv = document.getElementById("carouseltext");
    const showMoreBtn = document.getElementById("show-more-btn");

    if (expanded) {
      textDiv.style.height = "100px";
      showMoreBtn.innerHTML = "Show More...";
    } else {
      textDiv.style.height = "auto";
      showMoreBtn.innerHTML = "Show Less...";
    }
    setExpanded(!expanded);
  }
  return (
    <div className="mt-5 ">
      <div className="roomimg">
        <img src="images/roombg.png" alt="" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover'}} />
      </div>
      {/* <div className="hr1_parent">
        <hr className="hr1" />
      </div> */}
      <div className="uirooms">
{
 api.map((api) => (
  <div className="col-lg-12 carouselparentdiv">
  <div className="carouseldiv col-lg-3">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="images\Grand-Hyatt-Seattle-P082-Bathroom.4x3.png"
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="images\Grand-Hyatt-Seattle-P082-Bathroom.4x3.png"
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="images\Grand-Hyatt-Seattle-P082-Bathroom.4x3.png"
            alt="First slide"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
  <div className="col-lg-6">
    <div className="carouseltext" id="carouseltext">
      <h6>{api.title}</h6>
      <p>{api.description}</p>
    </div>
    <a id="show-more-btn" onClick={handleShowMore}>
      {expanded ? "Show Less..." : "Show More..."}
    </a>
  </div>
  <div className="col-lg-3 carouselbtn">
    <h3>${api.price}</h3>
    <p>Avg/Night (USD)</p>
   {
    sessionStorage.getItem("user_id") == null ? (
      <button className="btn sellectbtn" style={{backgroundColor:"orange"}} onClick={handleButtonClick}>SELLECT</button>
    ):(
      <button className="btn btn-warning slectbtn"><Link to={"/roomdetails"}>SELLECT</Link></button>
    )
   }
  </div>
</div>


 )) //api.map function ends here
}
</div>
      {/* model body goes here */}
      <div className="col-lg-12 modal model" tabIndex={"-1"} style={{display: modalShow ? 'block' : 'none'}}>
<div className="modal-dialog col-lg-12 ">
  <div className="modal-content col-lg-12">
    <div className="modal-header">
    <h5 className="modal-title">Join World of Hyatt or sign in to your account to book.</h5>
      <button type="button" className="btn-close" onClick={() => setModalShow(false)} aria-label="Close"></button>
    </div>
    <div className=" bodyofmodel ">
  {/* div 1 */}
  <div className="modal-body ">
              <p>Want to become
a World of Hyatt member?</p> <Link to={"/loginsignup"}>
<button className="btn btn-primary chooseroomebtn">SignUp</button></Link>
            </div>
              {/* div 2 */}
              <div className="modal-body ">
              <p>Already a
World of Hyatt member?</p><Link to={"/loginsignup"}>
<button className="btn btn-primary chooseroomebtn">Login</button></Link>
            </div>
</div>
<div className="modal-footer">
              <button type="button" className=" chooseroomebtn btn btn-secondary" onClick={() => setModalShow(false)}>Close</button>
            </div>


  </div>

</div>

      </div>
    </div>
  );
};

export default Chooseroom;
