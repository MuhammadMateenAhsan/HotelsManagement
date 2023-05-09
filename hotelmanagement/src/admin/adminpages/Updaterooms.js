import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Updaterooms = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [obj, setObj] = useState({
    id: id,
    title: '',
    price: '',
    description: ''
  });

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/${id}`)
      .then(res => {
        setObj({
          ...obj,
          title: res.data.title,
          price: res.data.price,
          description: res.data.description
        });
      });
  }, []);

  const handleUpdate = e => {
    e.preventDefault();
    axios.put(`http://127.0.0.1:8000/${id}`, obj)
      .then(() => {
        navigate('/showrooms');
      });
  };

  return (
    <div className='container'>
      <h2 className='display-4 richText richtext'>Update Data</h2>
      <form
        action=''
        className='mt-4 border p-4 rounded'
        onSubmit={handleUpdate}
      >
        <label htmlFor=''>Name</label>
        <input
          type='text'
          name='title'
          id=''
          className='form-control'
          onChange={e => setObj({ ...obj, title: e.target.value })}
          value={obj.title}
        />

        <label htmlFor=''>Email</label>
        <input
          type='text'
          name='price'
          id=''
          className='form-control'
          onChange={e => setObj({ ...obj, price: e.target.value })}
          value={obj.price}
        />

        <label htmlFor=''>Description</label>
        <textarea name="description" className='form-control'  onChange={e => setObj({ ...obj, description: e.target.value })}
          value={obj.description} id="" cols="30" rows="10"></textarea>

        <button className='btn btn-primary mt-3'>Update Data</button>
      </form>
    </div>
  );
};

export default Updaterooms;
