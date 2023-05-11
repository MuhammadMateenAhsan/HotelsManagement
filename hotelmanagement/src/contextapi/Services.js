import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
export const Global=createContext();
const Services = (props) => {
  const empty={
name:"",
title:"",
salary:"",
idcard:"",
phone:"",
email:"",
gender:""
  }
  const Navigate = useNavigate();
  //state for editing the data
  const [Getid, SetGetid]= useState()

  const [handle,setHandle] = useState(empty)
     // function for editing the Api of employee
 const editApi=async(id)=>{
  var data= await fetch(`http://localhost:8000/employee/${id}`);
  data=await data.json()
  console.log(data)
  setHandle(data)
  SetGetid(id)
    }
    const handler=(e)=>{
      const {name,value}=e.target;
      setHandle({...handle,[name]:value});
    }
    // handle to update the employee
    const handleUpdate=()=>{
      if(handle.name === ""  || handle.email === ""  ||handle.title === ""  ||handle.salary === ""  ||handle.idcard === ""  ||handle.phone === ""  ||handle.gender === ""){
  alert("Please fill the input fields first.")
      }else{
      fetch(`http://localhost:8000/employee/${Getid}`,{
        method:'PUT',
        headers:{
          "content-Type": "application/json",
         },
         body:JSON.stringify(handle)
        
      })
      console.log(handle)
      setHandle(empty)
      Navigate("/sidebar")
      }
  }

  // function to show data on showemployee component
  const [api,setApi] = useState([])
  let fetchemployee = async()=>{
      let record = await fetch('http://127.0.0.1:8000/employee');
      let data = await record.json();
      setApi(data)

  }
  
  return (
    <>
    <Global.Provider value={{editApi:editApi, handle:handle, handleUpdate:handleUpdate, handleUpdate:handleUpdate, handler:handler, fetchemployee:fetchemployee, api:api}}>
        {props.children}
    </Global.Provider>
    </>
  )
}

export default Services