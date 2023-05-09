import React, { useEffect, useState } from 'react'

const Addemployee = () => {
  const empty={
name:"",
title:"",
salary:"",
idcard:"",
phone:"",
email:"",
gender:""
  }
  const [handle,setHandle]=useState(empty)
  const senddatatoapi=async()=>{
    if(handle.name=="" || handle.title=="" || handle.email=="" || handle.gender=="" || handle.idcard=="" || handle.phone=="" ||handle.salary==""){
alert("Please fill the input fields first.")
    }else{
      let record = await fetch("http://127.0.0.1:8000/addemployee",{
        method:"POST",
        headers:{
            "content-type" : "application/json"
        },
        body:JSON.stringify(handle)
    })
    setHandle(empty)
    record = await record.json()
    if(record == "Employee already exist"){
alert("Employee already exist")
    }else{
        alert("Employee successfuly added")
    }
  }
}

  const handler=(e)=>{
    const {name,value}=e.target;
    setHandle({...handle,[name]:value});
  }
  return (
    <>
    <div className='container formadjustment'>
      <div className='form-group col-lg-8'>
        <h2 className='richtext richText display-5 mt-5'>Add New Employee</h2>
        <form action="" className='formlabel border p-5 rounded'
        onSubmit={(e)=>{
          e.preventDefault();
          senddatatoapi();
        }}
        >
          <div className='form-group'>
          <label htmlFor="employeename">Full Name:</label>
          <input type="text" name="name" value={handle.name} onChange={handler} className='form-control' id="" />
          </div>

          <div className='form-group'>
          <label htmlFor="jobtitle">Job Title:</label>
          <input type="text" name="title" value={handle.title} onChange={handler} className='form-control' id="" />
          </div>

          <div className='form-group'>
          <label htmlFor="salary">Salary:</label>
          <input type="text" name="salary" value={handle.salary} onChange={handler} className='form-control' id="" />
          </div>

          <div className='form-group'>
          <label htmlFor="idcard">Id_Card:</label>
          <input type="text" name="idcard" value={handle.idcard} onChange={handler} className='form-control' id="" />
          </div>

          <div className='form-group'>
          <label htmlFor="phone">Phone:</label>
          <input type="text" name="phone" value={handle.phone} onChange={handler} className='form-control' id="" />
          </div>

          <div className='form-group'>
          <label htmlFor="email">e-mail:</label>
          <input type="text" name="email" value={handle.email} onChange={handler} className='form-control' id="" />
          </div>

          
          <label htmlFor="gender">Gender:</label>
          <input type="text" name="gender" value={handle.gender} onChange={handler} className='form-control' id="" />
          {/* <div className='form-group radiostyle'>
          <div className="form-check">
            <label className="form-check-label">
              <input type="radio"  className="form-check-input" value="male" onChange={handler} name="male" id="" />
              Male
            </label>
          </div>
          <div className="form-check val">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="female" id="" value="female" onChange={handler}/>
              Felmale
            </label>
          </div>
          <div className="form-check val">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="other" id="" value="other" onChange={handler} />
              Other
            </label>
          </div>
          </div> */}
          <div className='formbtn'>
          <button className='btn btn-primary mt-4'>Add Employee</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Addemployee