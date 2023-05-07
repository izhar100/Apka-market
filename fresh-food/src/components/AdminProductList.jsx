import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { AdminProductCard } from './AdminProductCard';
import { deleteProduct, getProducts } from '../redux/AdminProductReducer/action';

export const AdminProductList = () => {
    const [searchParams] =useSearchParams();
    const dispatch = useDispatch();
    const location = useLocation()
    const {products} = useSelector((store) => store.AdminProductReducer);
    console.log(products)
    let obj = {
        params: {
            type: searchParams.getAll("type"),
            // type: searchParams.getAll("category"),
            _sort: searchParams.get("order") && "price",
            _order: searchParams.get("order"),
        },
    }
    const handleDelete = (id) => {
        dispatch(deleteProduct(id))
        alert('Product delete successfully!');
      }


    useEffect(() => {
        dispatch(getProducts(obj))
    }, [location.search]);

  return (
    <DIV>
    {products.length > 0 &&
    products.map((el) => {
        return <AdminProductCard key={el.id} {...el} handleDelete={handleDelete}/>
    })}
    </DIV>
    )
  
}
const DIV = styled.div`
/* width: 80%;
margin-left: 47px;
margin-top:20px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 15px; */
    /* For screens smaller than 480px */
/* For screens smaller than 600px */
@media screen and (max-width: 400px) {
  
    display: block;
    margin-left: 0;
    width: 100%;
    margin-top: 10px;
  
}
@media (min-width: 401px) and (max-width: 601px){
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 15px;
    margin-left: 47px;
    margin-top: 20px;
}
/* For screens larger than 600px */
@media screen and (min-width: 601px) {
  
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 15px;
    margin-left: 47px;
    margin-top: 20px;
  
}
`