
import './App.css';
import Form from './Components/Form';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import StudentList from './Components/StudentList';
import Navbar from './Components/Navbar'
import Edit from './Components/Edit'
import Delete from './Components/Delete';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" exact element={<Form />}></Route>
          <Route path ="/students" element={<StudentList/>} />
          <Route path ="/edit" element ={<Edit/>} />
          <Route path ="/delete" element ={<Delete/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
