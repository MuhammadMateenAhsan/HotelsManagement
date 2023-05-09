import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const clesrsession = ()=>{
    sessionStorage.clear()
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg">
          <Link className='navbarlogo' to="/"><img height={"120px"} width={"200px"} src="images\logoWorld_OF_Hyatt.png" alt="" /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav" >
      <li className="nav-item active  ">
        <Link className="nav-link" to="/">Hotel <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="/room">Roomes</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="/dining">Dining</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/specialevents">Special Events</Link>
      </li>
    </ul>
    <div className='d-flex'>
    <div className='signuplogin'><Link to="/loginsignup">SignUp/LogIn</Link></div>
    <div className='adminlogin'><Link to="/sidebar">Admin</Link></div>
    <div class="dropdown">
  {/* <button class="dropbtn">Dropdown</button> */}
  <i class="fa fa-user fa-3x usericon" aria-hidden="true"></i>
  <div class="dropdown-content">
    <Link to="#" className='logoutbtn' onClick={clesrsession}>LogOut</Link>
  </div>
</div>
</div>
    
  </div>
</nav>
    </div>
  )
}

export default Navbar