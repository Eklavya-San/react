import React, {useState} from "react"
import './App.css';
import axios from "axios"
// import body from "body-parser"

function App() {

  const [fname,nameSetter]=useState();
  const [fcount,countSetter]=useState();

  const addToList =()=>{
    axios.post("http://localhost:3000/insert",{foodName:fname,daySinceIAte:fcount});
    console.log(fname+"<= food Name, count=>  "+fcount)
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
