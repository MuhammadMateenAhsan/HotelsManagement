import React from 'react'
import { Link } from 'react-router-dom'

const ErorrPage = () => {
  return (
    <div className='d-flex justify-content-center text-center mb-5'>
        <div>

        <h1 className='richtext richText display-2 mt-5'>404 error</h1>
        <h4>Page Not Found</h4>
        <Link to="/">Back</Link>
        </div>

    </div>
  )
}

export default ErorrPage