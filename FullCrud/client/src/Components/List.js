import React, { useState,useEffect } from 'react'
import axios from 'axios';

const UpdateOne=async(props)=>{
  return (
    <div>
      {props.name}
    </div>
  )
}
const List = () => {
  const [students, setstudents] = useState([]);

  const up =async(obj)=>{
    await axios.patch(`http://localhost:5000/${obj._id}`,({name:"nova",email:"roraa"}))
    return <UpdateOne obj={obj}/>
  }
  const del =async(obj)=>{
    await axios.delete(`http://localhost:5000/${obj}`).then((res)=>{
      alert("deleted successfully");
      Load();
    }).catch((error)=>{
      console.log({message:error});
    })
  }
  const Load=()=>{
    axios.get('http://localhost:5000/get').then((res)=>{
      setstudents(res.data);
    }).catch((error)=>{
      console.log(error + " in the student useEffect");
    })
  }
  useEffect(() => {
    Load();
  }, [])

  const renderList=()=>{
    return students.map((iterator)=>{
      return <tr key={iterator._id}><td>{iterator.name}</td><td>{iterator.email}</td><td><button type='button' onClick={()=>del(iterator._id)}>Delete</button></td><td><button type='button' onClick={()=>up(iterator)}>Update</button></td></tr>
    })
  }
  return (
    <div>
      <table style={{border:'1px solid black'}}>
        <tbody>
        <tr><th>Name</th><th>email</th><th></th></tr>
        {renderList()};
        </tbody>
      </table>
    </div>
  )
}

export default List