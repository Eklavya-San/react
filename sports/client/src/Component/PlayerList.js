import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import './list.css'

const PlayerList = () => {
    const [playerArr, setplayerArr] = useState([])
    const display=()=>{
        axios.get(`http://localhost:5000/get`).then((response)=>{
            try {
                setplayerArr(response.data);
            } catch (error) {
                console.log(error);
            }
        })
    }
    useEffect(() => {
      display();
    }, [])
    
    const renderList=()=>{
        return playerArr.map((iterator)=>{
            return(
                <tr key={iterator._id}>
                    <td>{iterator.Name}</td>
                    <td>{iterator.City}</td>
                    <td>{iterator.Dob}</td>
                    <td>{iterator.Age}</td>
                    <td>{iterator.Matched_played}</td>
                    <td>{iterator.Sport}</td>
                </tr>
            )
        })
    }

  return (
    <div>
        
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>Dob</th>
                    <th>Age</th>
                    <th>Matched_played</th>
                    <th>Sport</th>
                </tr>
                {renderList()}
            </tbody>
        </table>
    </div>
  )
}

export default PlayerList