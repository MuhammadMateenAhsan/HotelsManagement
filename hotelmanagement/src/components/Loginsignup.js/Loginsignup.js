import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Loginsignup = () => {
    const Navigate = useNavigate();
    
    const handler = (e)=>{
        const {name , value} = e.target;
        setHandle({...handle, [name] : value});
    };
    const empty={
        name:"",
        email:"",
        password:""
    }
    const [handle,setHandle] = useState(empty)

    // Login form function start
    const login = async()=>{
        if(handle.email === "" || handle.password === ""){
            alert("Please fill the input fields first")
        }else
        
        {
            let loginrecord = await fetch("http://127.0.0.1:8000/login",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(handle)
            })
            setHandle(empty);
            loginrecord = await loginrecord.json();
            if(loginrecord.message == "Login successful"){
                sessionStorage.setItem("user_id",loginrecord.userAlreadyExist._id)
                sessionStorage.setItem("user_email",loginrecord.userAlreadyExist.email)
                alert("Login Successfuly")
                let admin = sessionStorage.getItem("user_email")
                if(admin === "mohmat646@gmail.com"){
                    Navigate("/sidebar")
                }else{
                    Navigate("/specialevents")
                }
            }else{
                alert("error: Email or password is incorrect.")
            }
        }
        
    } // Login form function end

    const signUp= async()=>{
        if(handle.name === "" || handle.email === "" || handle.password === ""){
alert("Please fill the input fields first")
        }else{
            let signuprecord = await fetch("http://127.0.0.1:8000/signup",{
                method:"POST",
                headers:{
                    "content-type" : "application/json"
                },
                body:JSON.stringify(handle)
            })
            setHandle(empty)
            signuprecord = await signuprecord.json()
            if(signuprecord == "user already exist"){
alert("user already exist")
            }else{
                alert("Signup successfully")
                Navigate("/")
            }
        }
    }
    useEffect(() => {
        function myfunction() {
          const loginsec = document.querySelector('.login-section')
          const loginlink = document.querySelector('.login-link')
          const registerlink = document.querySelector('.register-link')
          registerlink.addEventListener('click', () => {
            loginsec.classList.add('active')
          })
          loginlink.addEventListener('click', () => {
            loginsec.classList.remove('active')
          })
        }
        myfunction();
      }, []);
  return (
        <>
        {/* <div className="roomimg">
        <img src="images\loginsignupbg.png" alt="" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover'}} />
      </div> */}
    <div className="background"></div>
    <div className="containerSL">
        <div className="item">
            <h2 className="logo"><i className='bx bxl-xing'></i>Mateen Ahsan</h2>
            <div className="text-item">
                <h2>Welcome! <br/><span>
                    To The World of Hyatt
                </span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, repellendus?</p>
                <div className="social-icon">
                    <Link to="#"><i className='bx bxl-facebook'></i></Link>
                    <Link to="#"><i className='bx bxl-twitter'></i></Link>
                    <Link to="#"><i className='bx bxl-youtube'></i></Link>
                    <Link to="#"><i className='bx bxl-instagram'></i></Link>
                    <Link to="#"><i className='bx bxl-linkedin'></i></Link>
                </div>
            </div>
        </div>
        <div className="login-section" >
            <div className="form-box login">
                <form action=""
                onSubmit={
                    (e)=>{
                        e.preventDefault();
                        login()
                        
                    }
                }
                
                >
                    <h2>LogIn</h2>
                    <div className="input-box">
                        <span className="icon"><i className='bx bxs-envelope'></i></span>
                        <input type="email" name='email' value={handle.email} onChange={handler}/>
                        <label >Email</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><i className='bx bxs-lock-alt' ></i></span>
                        <input type="password" name='password' value={handle.password} onChange={handler}/>
                        <label>Password</label>
                    </div>
                    <div className="remember-password">
                        <label for=""><input type="checkbox"/>Remember Me</label>
                        <a href="#">Forget Password</a>
                    </div>
                    <button className="btn signupbtn" style={{color:"white", borderColor:"white"}}>LogIn</button>
                    <div className="create-account">
                        <p>Create A New Account? <Link to="#" className="register-link">Sign Up</Link></p>
                    </div>
                </form>
            </div>
            <div className="form-box register">
                <form action=""
                onSubmit={
                    (e)=>{
                        e.preventDefault();
                        signUp()
                    }
                }
                >

                    <h2>Create Account</h2>

                    <div className="input-box">
                        <span className="icon"><i className='bx bxs-user'></i></span>
                        <input type="text" name='name' value={handle.name} onChange={handler}/>
                        <label >Username</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><i className='bx bxs-envelope'></i></span>
                        <input type="email" name='email' value={handle.email} onChange={handler}/>
                        <label >Email</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><i className='bx bxs-lock-alt' ></i></span>
                        <input type="password" name='password' value={handle.password} onChange={handler}/>
                        <label>Password</label>
                    </div>
                    <div className="remember-password">
                        <label for=""><input type="checkbox"/>I agree with this statment</label>
                    </div>
                    <button className="btn signupbtn" style={{color:"white", borderColor:"white"}}>SignUp</button>
                    <div className="create-account">
                        <p>Already Have An Account? <Link to="#" className="login-link">LogIn</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
</>
  )
}

export default Loginsignup