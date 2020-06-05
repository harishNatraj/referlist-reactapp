import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const Waitlist = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/user')
            .then(function (response) {
                // handle success
                console.log(response)
                setData(response.data.users)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    return (
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr>
                        <th className="head">Position</th>
                        <th className="head">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => (
                            <tr>
                                <td className="head-pos">{item.position}</td>
                                <td className="head">{item.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Waitlist;