import React, {useState} from "react"
import './App.css';
import axios from "axios"
// import body from "body-parser"

function App() {

  const [foodname,nameSetter]=useState();
  const [day,countSetter]=useState();

  const addToList =()=>{
    axios.post("http://localhost:3000/insert",{foodName:foodname,daySinceIAte:day});
    console.log(foodname  +"<= food Name, count=>  "+day)
  }
  return (
    <div className="App">
     <h1>hello crud operations</h1>
     <label>food name</label> 
     <input type="text"
        onChange={
        (event)=>{nameSetter(event.target.value)}} 
        >
        </input>
     <label>food count</label>
     <input type="number" 
     onChange={
      (event)=>{
        countSetter(event.target.value)
      }
     } ></input>
     <button type="button" onClick={addToList} >add to database</button>
    </div>
  );
}

export default App;
