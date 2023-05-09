import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Global } from '../../contextapi/Services';

const Updateemployee = () => {
    let a=useContext(Global);
    // const { id } = useParams();
//     const empty={
//         id: id,
// name:"",
// title:"",
// salary:"",
// idcard:"",
// phone:"",
// email:"",
// gender:""
//       }
//   const Navigate = useNavigate();
  
//   const [handle, setHandle] = useState(empty);
//   const handler=(e)=>{
//     const {name,value}=e.target;
//     setHandle({...handle,[name]:value});
//   }

 // function for updating the Api
// const handleUpdate=()=>{
//     if(handle.name === ""  || handle.email === ""  ||handle.title === ""  ||handle.salary === ""  ||handle.idcard === ""  ||handle.phone === ""  ||handle.gender === ""){
// alert("Please fill the input fields first.")
//     }else{
//     fetch(`http://localhost:8000/employee/${id}`,{
//       method:'PUT',
//       headers:{
//         "content-Type": "application/json",
//        },
//        body:JSON.stringify(handle)
      
//     })
//     console.log(handle)
//     setHandle(empty)
//     Navigate("/sidebar/showemployee")
//     }
// }
  return (
    <div className='container'>
      <h2 className='display-4 richText richtext'>Update Employee Data</h2>
      <form
        action=''
        className='mt-4 border p-4 rounded'
        onSubmit={
          (e)=>{
            e.preventDefault();
            a.handleUpdate();
          }  
            
        }
      >
        <label htmlFor=''>Name</label>
        <input
          type='text'
          name='name'
          id=''
          className='form-control'
          onChange={a.handler}
          value={a.handle.name}
        />

<label htmlFor=''>Job Title</label>
        <input
          type='text'
          name='title'
          id=''
          className='form-control'
          onChange={a.handler}
          value={a.handle.title}
        />

<label htmlFor=''>Salary</label>
        <input
          type='text'
          name='salary'
          id=''
          className='form-control'
          onChange={a.handler}
          value={a.handle.salary}
        />

<label htmlFor=''>Id_Card</label>
        <input
          type='text'
          name='idcard'
          id=''
          className='form-control'
          onChange={a.handler}
          value={a.handle.idcard}
        />

<label htmlFor=''>Phone</label>
        <input
          type='text'
          name='phone'
          id=''
          className='form-control'
          onChange={a.handler}
          value={a.handle.phone}
        />

<label htmlFor=''>Email</label>
        <input
          type='text'
          name='email'
          id=''
          className='form-control'
          onChange={a.handler}
          value={a.handle.email}
        />
        <label htmlFor=''>Gender</label>
        <input
          type='text'
          name='gender'
          id=''
          className='form-control'
          onChange={a.handler}
          value={a.handle.gender}
        />
        <button className='btn btn-primary mt-3'>Update Data</button>
      </form>
    </div>
  );
};

export default Updateemployee;
