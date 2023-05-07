import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const AdminProductCard = ({image1,image, name, price, productline, discount, id,handleDelete,rating}) => {

  return (
    <DIV >
        <div className='s1'>
            <img src = {image1||image} alt={name}/>
            <h4>Name: {name}</h4>
            <h4>Price: {price}</h4>
            {/* <p>Strickoff-price: {"strickoff-price"}</p>
            <p>Brand: {productline}</p>
            <p>Discount: {discount}%</p> */}
            {/* <p>Rating: {rating.rate} ⭐</p> */}
            <div className='btn'>
    <button className='editbtn'>
        <Link to={`/edit/${id}`}>Edit</Link>
    </button>
    <button className='dlbtn' onClick={()=>handleDelete(id)} >
         Delete
    </button>
    </div>
        </div>
    
    </DIV>
  )
}
const DIV = styled.div`
    
    width: 280px;
    
    .s1 {
  display: flex;
  
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-bottom: 20px;
  
  transition: transform 1s;
  overflow:clip;
  cursor:pointer;
  :hover{
    transform: scale(0.9)
  }
}
.s1 img {
  max-width: 100%;
  height: auto;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
.editbtn,
.dlbtn {
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  font-size: 16px;
  text-transform: uppercase;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
.editbtn:hover,
.dlbtn:hover {
  background-color: #0056b3;
}
a {
  color: #fff;
  text-decoration: none;
}
`