import React from 'react'
import axios from 'axios'
const Form = () => {
    const post = () => {
        const studData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
        }
        axios.post(`http://localhost:5000/post`, studData).then(
            (res) => {
                alert("data added succesfully")
            }
        )

    }
    return (
        <div>

            <label htmlFor="name">Name:</label>
            <input type="text" name='name' id='name'></input>
            <label htmlFor="email">Email</label>
            <input type="text" name='email' id='email'></input>
            <label htmlFor="password">password:</label>
            <input type="text" name='password' id='password'></input>

            <button type='button' onClick={post}>Register</button>

            <div id='output'></div>
        </div>
    )
}

export default Form