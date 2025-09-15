import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from 'axios';
import axiosInstance from './axiosinterceptor';
import { useLocation, useNavigate } from 'react-router-dom';

const Add = () => {
  const [form, setForm] = useState({
    productTitle: '',
    productDescription: '',
    Status: '',
    imageUrl: ''
  });

  const navigate = useNavigate();

  const handleAdd = () => {
    if(location.state!=null){
      axiosInstance.put("/products/update/"+location.state.product._id,form)
      .then((res)=>{
        
        alert("Product added")
        navigate('/')

      })
      .catch((err)=>{
        console.log(err)
      })
    }else{
    axiosInstance.post('/products/add', form) 
      .then(() => {
        alert('Product Added!');
        navigate('/'); 
      })
      .catch((err) => {
        console.error(err);
        alert('Error adding product');
      });
    }
  };
let location=useLocation()
useEffect(()=>{
  if(location.state!=null){
    setForm({...form,productTitle:location.state.product.productTitle,
      productDescription:location.state.product.productDescription,
      Status:location.state.product.Status,
      imageUrl:location.state.product.imageUrl
    })

  }
},[])
  return (
    <Card style={{ width: 300, height: 400 }}>
      <CardContent>
        <div>
          <TextField
            required
            id="productTitle"
            label="Product Title"
            value={form.productTitle}
            onChange={(e) => setForm({ ...form, productTitle: e.target.value })}
          /><br /><br />

          <TextField
            required
            id="productDescription"
            label="Product Description"
            value={form.productDescription}
            onChange={(e) => setForm({ ...form, productDescription: e.target.value })}
          /><br /><br />

          <TextField
            required
            id="Status"
            label="Status"
            value={form.Status}
            onChange={(e) => setForm({ ...form, Status: e.target.value })}
          /><br /><br />

          <TextField
            required
            id="imageUrl"
            label="Image URL"
            value={form.imageUrl}
            onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
          /><br /><br />

          <Button variant="contained" onClick={handleAdd}>Add Product</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Add;
