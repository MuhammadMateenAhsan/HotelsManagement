import React, { useEffect } from 'react'

const Home = () => {
    
    useEffect(() => {
        const form = document.getElementById('form');
        form.addEventListener('mouseover', (e) => {
          const x = (window.innerWidth / 2 - e.pageX) / 12;
          const y = (window.innerHeight / 2 - e.pageY) / 12;
          form.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
        });
        form.addEventListener('mouseleave',function(){
            form.style.transform = 'rotateX(0deg)rotateY(0deg)';
        })
      }, []);
  return (
    <div className='form-container'>
    <form action="" id="form">
    <h3>Login</h3>
    <i className="fas fa-user"></i>
    <input type="text" placeholder='username' name="" id="" />
<br />
    <i className="fas fa-at"></i>
    <input type="email" placeholder='email' name="" id="" />
<br />
    <i className="fas fa-lock"></i>
    <input type="password" placeholder='password' name="" id="" />
    <input type="submit" value={'login'} name="" id="" />
    </form>
    </div>
  
  )
  
}


export default Home

// var form = document.getElementById("form");
// form.addEventListener('mouseover',(e)=>{
//     var x=(window.innerWidth / 2 - e.pageX) / 12;
//     var y=(window.innerHeight / 2 - e.pageY) / 12;
//     form.style.transform = 'rotateX' + x + 'deg)rotateY(' + y + 'deg)' })