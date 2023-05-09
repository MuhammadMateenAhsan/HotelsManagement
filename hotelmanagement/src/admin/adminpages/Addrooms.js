import React, { useState } from 'react'

const Addrooms = () => {
   // create empty object to make initial state of fields empty
   const empty={
    title:"",
    price:"",
    description:""
}
// create a useState and set initial value empty by passing an bject of empty
const [handle,setHandle]=useState(empty)

// function to target the input fields
const handler = (e) => {
const { name, value } = e.target;
setHandle({ ...handle, [name]: value });
console.log(handle)
};

// function to send data to api
const senddatatoapi = () => {
    fetch("http://127.0.0.1:8000/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(handle),
    }).then(() => {
      setHandle(empty);
    });
  };

  // const a=useContext(Global)
// let handles=a.handle;
  return (
    <>
     <div className='container formadjustment'>
      <div className=' form-group col-lg-8 mt-4'>
        <h2 className='richText richtext display-4'>Add New Room</h2>
        <form action="" className='formlabel'
        onSubmit={(e)=>{
          e.preventDefault();
          senddatatoapi();
        }
      }
        >
          <div className="form-group">
          <label htmlFor="">Title:</label>
          <input type="text" onChange={handler} value={handle.title} name="title" id="" placeholder="1 King Bed or Double Room etc." className='form-control'/>
          </div>

          <div className="form-group">
          <label htmlFor="">Price:</label>
          <input type="text" name="price" onChange={handler} value={handle.price} id="" className='form-control'/>
          </div>

          <div className="form-group">
          <label htmlFor="">Add Room Detail:</label>
          <textarea name="description" onChange={handler} value={handle.description} className="form-control" id="" cols="30" rows="3"></textarea>
          </div>
           {/* <div className="form-group">
            <label htmlFor="">Add Images:</label>
            <br />
          <input type="file" name="image" id="" />  
          </div> */}
          <div className="formbtn">
            <button className="btn btn-primary">Add Room</button>
          </div>
        </form>
      </div>
      </div> 
    </>
  )
}

export default Addrooms