import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { editProduct, getProducts } from '../redux/AdminProductReducer/action';
import { AdminNavbar } from '../components/AdminNavbar';
import AdminDashboard from './AdminDashboard';
const initialState = {
  name: "",
  image:[],
  discount:"",
  price:"",
  productline:"",
  brand:"",
  rating: {
    rate: "",
  },

}

const AdminEditProduct = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(initialState);
  const [success, setSuccess] = useState(false);


  const {products} = useSelector((store) => store.AdminProductReducer);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    let {name, value} =e.target;
    // console.log(name,value);
    if(name === "image1" || name === "image2"){
        value = [...data.image1,value];
       }
    // value = [...products.image,value];
    setData(prev => {
      return {...prev, [name]: value}
    })
    
  }
  
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editProduct(data, id))
    .then(() => {
      setSuccess(true);
      alert("Product edited successfully");
      navigate("/admindashboard");

    })
    .catch((error) => {
      console.log(error);
      alert('Failed to edit product.');
    });
  }

  useEffect(() => {
    const parsedId = typeof id === "string" ? parseInt(id) : +id;
    const data = products.find((el) => el.id === parsedId);
    setData(data);
  }, [id,products]);
  console.log(data,"data");
  
console.log(products,"products")
  return (
    <DIV>
      <AdminNavbar/>
      <form onSubmit={handleEdit}>
      <h3>Edit Product: {id}</h3>
      <h2>{success && "Product Edited Successfully!!"} </h2>
        <input type="text" name={"image"} onChange={handleChange} value={data.image}/>
        <input type="text" name={"name"} onChange={handleChange} value={data.name}/>
        <input type="number" name={"price"} onChange={handleChange} value={data.price}/>
        <input type="text" name={"productline"} onChange={handleChange} value={data.productline}/>
        <input type="number" name={"discount"} onChange={handleChange} value={data.discount}/>
        
        <button  type='submit'> Edit</button>
        
      </form>
    </DIV>
  )
}
export default AdminEditProduct
const DIV = styled.div`
  /* Base styles */
h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}
h2 {
  font-size: 20px;
  color: green;
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