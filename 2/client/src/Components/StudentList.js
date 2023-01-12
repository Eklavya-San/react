import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';

const StudentList = () => {

    let [studentArr, setStudentArr] = useState([]);

    const edit = async (viva) => {
        const patch =async()=>{

        }

        return (
            <div>
                <table>
                    <tbody>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name='name' id='name' value={viva.name}></input>
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' id='email' value={viva.email}></input>
                        <label htmlFor="password">password:</label>
                        <input type="text" name='password' id='password'value={viva.password}></input>

                        <button type='button' onClick={patch}>Update</button>
                    </tbody>
                </table>
            </div>
        )
    }

    const del = async (id) => {
        console.log(id);
        await axios.delete(`http://localhost:5000/${id}`);
    }

    useEffect(() => {
        axios.get('http://localhost:5000/get').then((response) => {
            setStudentArr(response.data);
        }).catch((err) => {
            console.log("error in display ", err);
        })
    }, []);

    const renderList = () => {
        return studentArr.map((viva) => {
            return <tr key={viva._id}><td>{viva.name}</td><td>{viva.email}</td><td>{viva.password}</td><td>{viva.id}</td><td><button type='button' onClick={() => (del(viva._id))}>Delete</button></td><td><button type='button' onClick={() => (edit(viva))}>Edit</button></td></tr>
        })
    }


    return (

        <div id="output">

            <table style={{ border: '1px black solid ' }} >
                <tbody>
                    {renderList()}
                </tbody>
            </table>
        </div>
    )
}

export default StudentList