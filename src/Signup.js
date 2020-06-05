import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import axios from 'axios';
import {Button, Input } from 'antd';
import { Link } from 'react-router-dom';


let search = window.location.search;
let params = new URLSearchParams(search);
let id = params.get('refferalId');
console.log(id)
const Signup = (props) => {
  const [email,setMail] = useState();
  const handleChange = (e) => {
    setMail(e.target.value)
  }
  const handleSubmit = () => {
    axios.post(`http://localhost:8080/signup?refferalId=${id}`, {
      email: email,
    })
    .then(function (response) {
      console.log(response);
      const userId = response.data.user._id
    //   localStorage.setItem('token', email);
      localStorage.setItem('id', userId);
      props.history.push({
          pathname: '/Dashboard',
          UserId: userId
      })
    //   console.log(link)
      setMail(null);
    })
    .catch(function (error) {
      console.log(error);
    });
   
  }
  return (
    <div className="App">
      <div className="container">
        <div><Input size="large" placeholder="Enter email address" onChange={handleChange}/></div>
        <div><Button size="large" type="primary" onClick={handleSubmit}>Join Waitlist</Button></div>
      </div>
      <div><Link to='/Waitlist' style={{color: 'black'}}><Button size="large" type="danger">Click to view Waitlist</Button></Link></div>
    </div>
  );
}

export default Signup;
