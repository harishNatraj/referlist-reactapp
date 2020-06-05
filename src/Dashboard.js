import React, { useEffect, useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import axios from 'axios';
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';


const Dashboard = (props) => {
    const [link, setLink] = useState('');
    const [email, setMail] = useState('');
    const [position, setPosition] = useState();
    const [msg1, setMsg1] = useState('');
    const [msg2, setMsg2] = useState('');
    const [msg, setMsg] = useState('');
    const id = localStorage.getItem('id')
    const handleChange = (e) => {
        setMail(e.target.value)
    }
    const logout = () => {
        localStorage.removeItem('id')
    }
    const sendMail = () => {
        axios.post(`http://localhost:8080/sendInvite?Id=${id}`, {
            to_mail: email
        })
            .then(function (response) {
                setMsg(response.data.message);
                setTimeout(setMsg(''), 200000);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(() => {
        console.log(id)
        axios.get(`http://localhost:8080/user?Id=${id}`)
            .then(function (response) {
                // handle success
                setLink(response.data.user.invite_link)
                setMsg1(response.data.message1)
                setMsg2(response.data.message2)
                setPosition(response.data.user.position)
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);
    return (
        <div className="Dashboard">
            <div className="dash-container">
                <div><h1>{msg1}</h1></div>
                <div style={{ display: 'flex', justifyContent: 'center' }}><h2>{msg2}</h2></div>
                <div className="link-container">
                    <Input size="large" value={link} />
                    <Input size="large" placeholder="Enter mail address to send refferal link" onChange={handleChange} value={email} />
                    <Button size="large" type="primary" onClick={sendMail}>Send</Button>
                </div>
                {/* <div><Link to="/Signup">Logout</Link></div> */}
                <div><Link to="/Signup"><Button type= "danger" onClick={logout}>Logout</Button></Link></div>
                <div><h3>{msg}</h3></div>
            </div>
        </div>
    )
}

export default Dashboard;