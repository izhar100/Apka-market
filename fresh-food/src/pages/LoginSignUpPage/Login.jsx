import React, { useState } from "react";
import { AiOutlinePhone,AiOutlineMail } from "react-icons/ai";
import { IconName, BsFillEnvelopeAtFill,BsKey } from "react-icons/bs";
import styled from "styled-components";
import { Link } from "react-router-dom";

const imgLink =
  "https://img.freepik.com/free-photo/groceries-packages-delivery-covid-19-quarantine-shopping-concept-handsome-smiling-courier-red-uniform-give-cheeky-wink-as-delivering-food-box-online-order-client-house_1258-58697.jpg";

const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const handleLogin=(e)=>{
    e.preventDefault()
     const loginData={
      email,
      password
     }
     console.log(loginData)
  }
  return (
    <DIV>
      <div className="container">
        <img className="item" src={imgLink} alt="img" />
        <form className="header">
          <h3>Welcome Back! </h3>
          <h4 className="headerH4">Sign in to your account</h4>
          <div className="input">
            <AiOutlineMail />
            <input type="text" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="input">
            <BsKey />
            <input type="text" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <input className="submit" type="submit" value={"Sign In"} onClick={handleLogin} />
          <h4>
            New on Apka Market?
            <span>
              {" "}
              <Link to={"/signup"}>Create Account</Link>
            </span>
          </h4>
        </form>
      </div>
    </DIV>
  );
};

export default Login;

const DIV = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  .container {
    /* border: 1px solid red; */
    width: 35%;
    margin: auto;
    border-radius: 5px;
  }
  .item {
    margin: auto;
    border-bottom-left-radius: 5%;
    border-bottom-right-radius: 5%;
  }

  form {
    /* border: 1px solid red; */
    width: 80%;
    margin: auto;
    padding: 10px;
  }
  form > h3 {
    font-weight: bold;
    font-size: 35px;
    text-align: left;
    color: #323139;
  }
  form > h4 {
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    color: #323139;
  }
  .headerH4 {
    font-weight: 400;
    font-size: 20px;
    text-align: left;
    margin-left: 20px;
    color: #323139;
  }
  span {
    color: #29c250;
  }

  form > div {
    border: 1px solid #c0c4ca;
    display: flex;
    align-items: center;
    padding: 10px;
    width: 90%;
    margin: auto;
    margin: 10px;
    font-size: 25px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 35px;
    gap: 25px;
    padding-left: 25px;
    margin-top: 15px;
  }
  .submit {
    text-align: center;
    color: white;
    cursor: pointer;
    font-size: 25px;
    margin-bottom: 100px;
    align-items: center;
    padding: 10px;
    width: 85%;
    margin: auto;
    margin-right: 22px;
    background-color: #29c250;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

// border: 1px solid gray;
// padding: 10px 10px;

// .container{
//   border: 1px solid black;
//   margin: auto;
//   width: %;
//   display: grid;
//   justify-content: center;
// }
// div>img{
//   border: 1px solid red;
//   margin: auto;
// }

// form>h3{
//   font-size: medium;
//   font-style: bold;
//   font-size: 35px;
//   font-weight: 600;
//   text-align: left;

// }
// input{
//   border: 1px solid black;
//   border-radius: 10px;
//   padding: 10px;
// }
