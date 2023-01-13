import React from "react";
import axios from 'axios';

const Form = () => {
    const posted =()=>{

        const data = ({
            Name:document.getElementById("name").value,
            City:document.getElementById("City").value,
            Age:document.getElementById("Age").value,
            Matched_played:document.getElementById("Match").value,
            Sport:document.getElementById("Sport").value,
            Dob:document.getElementById("Dob").value,
        })

        axios.post('http://localhost:5000/post',data).then((response)=>{
            alert('Added successfully');
        })
    }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>name</th>
            <td>
              <input type="text" id="name"></input>
            </td>
          </tr>
          <tr>
            <th>City</th>
            <td>
              <input type="text" id="City"></input>
            </td>
          </tr>
          <tr>
            <th>Age</th>
            <td>
              <input type="text" id="Age"></input>
            </td>
          </tr>
          <tr>
            <th>Matched_played</th>
            <td>
              <input type="text" id="Match"></input>
            </td>
          </tr>
          <tr>
            <th>Sport</th>
            <td>
              <input type="text" id="Sport"></input>
            </td>
          </tr>
          <tr>
            <th>Dob</th>
            <td>
              <input type="text" id="Dob"></input>
            </td>
          </tr>
          <tr>
            <th><button type="button" onClick={()=>{posted()}}>Register</button></th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Form;
