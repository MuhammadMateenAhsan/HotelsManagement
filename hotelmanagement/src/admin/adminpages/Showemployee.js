import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Global } from '../../contextapi/Services';

const Showemployee = () => {
    // const [api,setApi] = useState([])
    // let fetchemployee = async()=>{
    //     let record = await fetch('http://127.0.0.1:8000/employee');
    //     let data = await record.json();
    //     setApi(data)

    // }
// function to delete data from DB
const deletedatafromapi = async(id)=>{
    let del = await fetch(`http://127.0.0.1:8000/employee/${id}`,{
      method:"DELETE"
    })
    del = await del.json()
  }
    useEffect(()=>{
        a.fetchemployee();
    },[deletedatafromapi])

    let a=useContext(Global);
  return (
    <>
    <div className='col-lg-12'>
        <h1 className='richtext richText'>Employees List</h1>
        <div style={{overflow:"scroll", width:"100%"}}>
        <table className='table  table-bordered' >
            <th>Id</th>
            <th>Full Name</th>
            <th>Job Title</th>
            <th>Sallery</th>
            <th>Id_Card</th>
            <th>Phone</th>
            <th>e-mail</th>
            <th>gender</th>
            <th>Update</th>
            <th>Delete</th>
            <tbody>
                {
                    a.api.map((api)=>(
                        <tr>
                          <td>{api._id}</td>
                          <td>{api.name}</td>
                          <td>{api.title}</td>
                          <td>{api.salary}</td>
                          <td>{api.idcard}</td>
                          <td>{api.phone}</td>
                          <td>{api.email}</td>
                          <td>{api.gender}</td>
                          <td>
                          <Link to={`/updateemployee/${api._id}`}><button onClick={()=>a.editApi(api._id)} className='btn btn-primary'>Edit</button></Link>
                          </td>
                          <td>  <button className="btn btn-danger" onClick={()=>deletedatafromapi(api._id)}>Delete</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
    </div>
    </>
  )
}

export default Showemployee