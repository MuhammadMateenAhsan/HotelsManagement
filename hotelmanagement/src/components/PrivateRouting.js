import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouting = () => {
    // let auth={'token':false}
    const admin = sessionStorage.getItem("user_email");
  return (
(admin != null) ? <Outlet/> : <Navigate to="/loginsignup"/>
    )
}

export default PrivateRouting