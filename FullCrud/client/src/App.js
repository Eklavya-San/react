import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import List from "./Components/List";
import Form from "./Components/Form";
function App() {
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/List" element={<List/>}/>
      <Route path="/Form" element={<Form/>}/>

    </Routes>
    </BrowserRouter>
  ) 
}

export default App;
