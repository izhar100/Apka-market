import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addData } from '../redux/AdminProductReducer/action';
import { AdminNavbar } from '../components/AdminNavbar';


const initialState = {
  id:0,
  type:"",
  name: "",
  price:"",
  "strikeoff-price":"",
  image:[],
  discount:"",
  
  productline:"",
  brand:"",
  rating: {
    rate: "",
    count: "",
  },
}

 const Admin = () => {
  const [product,setProduct] = useState(initialState)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    
    let {name,value} = e.target;
    // console.log(name,value);
    if(name === "image"||name === "image1" || name === "image2"){
        name = "image";
         value = [...product.image,value];
        // value = [...product,value]
       }
    //    if(name==="rating.rate"||name==="rating.count"){
    //     name = "rating.rate"
    //     value = [...product.rating,value]
    //    }
    // if(name===id&&i)
    setProduct((prev) => {
       
        return {...prev, [name]: value}

    })
    console.log(name,value);
  }
  const handleSubmit= (e) => {
    e.preventDefault();
    dispatch(addData(product));
    setProduct(initialState)
    alert('Product added successfully!');
  }
  return (
    <DIV>
      
      <AdminNavbar/>
      
      <div>

      <form onSubmit={handleSubmit} >
      <h2>Add Product</h2>
      <input 
            type="number" value={product.id} onChange={(e)=> { handleChange(e)}} name="id" placeholder='Id'/>
        <input 
            type="text" value={product.type} onChange={(e)=> { handleChange(e)}} name="type" placeholder='Type'/>
        <input 
            type="text" value={product.name} onChange={(e)=> { handleChange(e)}} name="name" placeholder='Name'/>
        <input 
            type="number" value={product.price} onChange={(e)=> { handleChange(e)}} name="price" placeholder='Price'/>
        <input 
            type="number" value={product["strikeoff-price"]} onChange={(e)=> { handleChange(e)}} name="strikeoff-price" placeholder='strikeoff-price'/>  
        <input 
            type="number" value={product.discount} onChange={(e)=> { handleChange(e)}} name="discount" placeholder='Discount'/>            
        <input 
            type="text" value={product.image[1]} onChange={(e)=> { handleChange(e)}} name="image1" placeholder='image'/>
        <input 
            type="text" value={product.image[2]} onChange={(e)=> { handleChange(e)}} name="image2" placeholder='image'/>
        {/* <select name="brand" onChange={(e)=> {handleChange(e)}}>
          <option value="">Select Brand</option>
          <option value="Mens">Mens</option>
          <option value="Womens">Womens</option>
          
        </select> */}
        <input 
            type="text" value={product.productline} onChange={(e)=> { handleChange(e)}} name="productline" placeholder='productline'/>
        <input 
            type="text" value={product.color} onChange={(e)=> { handleChange(e)}} name="color" placeholder='color'/>
        <input 
            type="text" value={product.description} onChange={(e)=> { handleChange(e)}} name="description" placeholder='description'/> 
        <input 
            type="number" value={product.quantity} onChange={(e)=> { handleChange(e)}} name="quantity" placeholder='quantity' />
        {/* <input 
            type="number" value={product.rating.rate} onChange={(e)=> { handleChange(e)}} name="rating.rate" placeholder='rating'/>           
        <input 
            type="number" value={product.rating.count} onChange={(e)=> { handleChange(e)}} name="rating.count" placeholder='count'/>     */}

        <button type='submit'>Submit</button>
      </form>
      </div>
      
    </DIV>
    
    
  )
}
export default Admin;
const DIV = styled.div`
/* width: 100%;
margin:40px  auto;
border: 1px solid gray;
padding: 20px;
font-family: 'Courier New', Courier, monospace;
font-weight: 700;
h2{
  color: #FF1744;
}
input{
  border: 1px solid gray;
}
    .form-1{
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;
    }
    input{
        width: 80%;
        height: 40px;
        font-size: large;
    }
    button{
        width: 20%;
        height: 35px;
        color: white;
        background-color: tomato;
        border-radius: 5px;
        :hover{
          color: #81D4FA;
        }
    }
    form{
      width:400px
      display: flex;
      flex-direction: column;
        gap: 15px;
        align-items: center;
    }
    select{
      width: 50%;
      height: 30px;
      font-size: large;
    } */
    h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}
h2 {
  font-size: 20px;
  color: #E53E3E;
  margin-bottom: 10px;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
form input[type="text"],
form input[type="number"],
form select {
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
}
form select {
  appearance: none;
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 12px;
  padding-right: 30px;
}
form button[type="submit"] {
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  text-transform: uppercase;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
form button[type="submit"]:hover {
  background-color: #0056b3;
}
/* Media queries */
@media only screen and (max-width: 767px) {
  h3 {
    font-size: 20px;
  }
  h2 {
    font-size: 18px;
  }
  form {
    padding: 10px;
  }
  form button[type="submit"] {
    padding: 8px 16px;
    font-size: 14px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  h3 {
    font-size: 22px;
  }
  h2 {
    font-size: 19px;
  }
  form {
    max-width: 80%;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  h3 {
    font-size: 24px;
  }
  h2 {
    font-size: 20px;
  }
  form {
    max-width: 80%;
  }
}
@media only screen and (min-width: 1200px) {
  h3 {
    font-size: 24px;
  }
  h2 {
    font-size: 20px;
  }
  form {
    max-width: 40%;
  }
}
`