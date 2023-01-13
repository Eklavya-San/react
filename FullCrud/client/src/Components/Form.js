import React from 'react'
import axios from 'axios'

const Form = () => {
    const post = ()=>{
        var email = document.getElementById('email').value;
        var name = document.getElementById('name').value;
        var password = document.getElementById('password').value;

        const jsonObj =({
            name:name,email:email,password:password
        })

        axios.post(`http://localhost:5000/post`,jsonObj).then(

            alert("added successfully"),
        )

    }
    return (
        <div >
            <form>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name"></input>
                </div>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email"></input>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password"></input>
                </div>
                <button type="button" onClick={post} class="btn btn-primary">Submit</button>
            </form>


        </div>
    )
}

export default Form