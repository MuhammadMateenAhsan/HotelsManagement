import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Global } from '../../contextapi/Services';

const Updateemployee = () => {
  const Navigate = useNavigate();
    let a=useContext(Global);
    const goback=()=>{
      Navigate("/sidebar/showemployee")
      // alert("helo")
    }
  
  return (
    <div className='container'>
      <span>
      <i class="fa fa-arrow-left" aria-hidden="true" style={{cursor:"pointer"}} onClick={goback}></i>
      <h2 className='display-4 richText richtext'>  Update Employee Data</h2>
      </span>
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
