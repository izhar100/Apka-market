import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const AdminNavbar = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("type");
  //const initialOrder = searchParams.get("order");
  const [category, setCategory] = useState(initialCategory || []);
  //const [order, setOrder] = useState(initialOrder || "")


  const handleChange = (e) => {
    let newCategory = [...category];
    const value = e.target.value;

    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };

  useEffect(() => {
    let params = {
      type : category
    };

    setSearchParams(params);
  }, [category]);
  return (
    <>
      <DIV>
      <img src="https://images.freeimages.com/images/large-previews/ab7/shields-1-1244388.jpg" alt="shild_image" />
     <Link to={"/admindashboard"}> <h4 style={{paddingLeft:"100px"}}>Dashboard</h4> </Link>
       <Link to={"/admin"}> <h4>Add Product</h4> </Link>
        {/* <h3>Shoping App</h3>
        <h4>
          <Link to={"/admindashboard"}>Dashboard</Link>
        </h4>
        <h4>
          <Link to={"/admin"}>Admin</Link>
        </h4> */}
        {/* <div className="prodCategory">
          <h4>Filter By</h4>
          <div>
            <input
              type="checkbox"
              value={"menshoes"}
              onChange={handleChange}
              checked={category.includes("menshoes")}
            />
            <label>Men Footware</label>
          </div>
          <div>
            <input
              type="checkbox"
              value={"womenshoes"}
              onChange={handleChange}
              checked={category.includes("womenshoes")}
            />
            <label>Women Footware</label>
          </div>
          <div>
            <input
              type="checkbox"
              value={"menclothing"}
              onChange={handleChange}
              checked={category.includes("menclothing")}
            />
            <label>Mens Clothing</label>
          </div>
          <div>
            <input
              type="checkbox"
              value={"womenclothing"}
              onChange={handleChange}
              checked={category.includes("womenclothing")}
            />
            <label>Womens Clothing</label>
          </div>
        </div> */}
      </DIV>
    </>
  );
};

const DIV = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  background-color:#62aae5;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid gray;
  .prodCategory {
    display: flex;
    align-items: center;
    /* margin-left: 10%; */
    gap: 10px;
  }
  /* Style for the dashboard and admin links */
  nav a {
    color: #333; /* Change this to the desired link color */
    text-decoration: none;
    margin-right: 20px;
  }
  img{
    width:40px;
    height:40px;
    margin-left:20px
  }
  .prodCategory{
    display: flex;
  align-items: center;
  /* margin-left: 20%; */
  gap: 10px;
  }
/* Style for the filter category section */
.prodCategory {
  display: flex;
  flex-direction: row;
  margin-left: 25%;
}
  /* Style for the category checkboxes */
  .prodCategory input[type="checkbox"] {
    margin-right: 5px;
  }
  /* Style for the category labels */
  .prodCategory label {
    font-weight: bold;
    margin-right: 10px;
  }
`;