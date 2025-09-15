import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import axiosInstance from './axiosinterceptor';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const[products,setProducts]=useState([])
    let token=localStorage.getItem('token')
    useEffect(()=>{
            axios.get("http://localhost:5000/products")
            .then((response)=>{
                setProducts(response.data.products)
            })
            .catch((error)=>{
                console.log("Error to fetching the products",error)
            })

    },[])
    const deleteProduct=(id)=>{
      axiosInstance.delete("http://localhost:5000/products/delete/"+id)
      .then((res)=>{
        alert("deleted successfully")
        window.location.reload()
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    let navigate=useNavigate()
    const updateProduct=(product)=>{
        navigate('/add',{state:{product}})
    }
  return (
    <div style={{display:"flex",gap:"2rem",flexWrap:"wrap"}}>
    {products.map((product)=>(
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={product.imageUrl}
        title={product.productTitle}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.productTitle}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {product.productDescription}
        </Typography>
        <Typography>{product.Status}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
        {token &&(
          <>
        <Button size="small" onClick={()=>updateProduct(product)}>Edit</Button>
        <Button size="small" onClick={()=>deleteProduct(product._id)}>Delete</Button>
        </>
      )}
      </CardActions>
    </Card>
    ))}
    </div>

  )
}

export default Home