import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  const clesrsession = ()=>{
    sessionStorage.clear()
    navigate("/loginsignup")
  }
   const isLoggedin = sessionStorage.getItem("user_email") == null;
   const adminemail = sessionStorage.getItem("user_email");
  if(adminemail == "mohmat646@gmail.com"){
      // navigate("/loginsignup")
  }else{
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
    {
            isLoggedin ? (
              <div className='d-flex '>
              <div className='signuplogin'><Link to="/loginsignup">LogIn</Link></div>
    </div>
            ):(
    <div className='adminlogin' onClick={clesrsession}>Logout</div> 
            )
          }
    
   
</div>
    
  </div>
</nav>
    </div>
  )
        }
}

export default Navbar