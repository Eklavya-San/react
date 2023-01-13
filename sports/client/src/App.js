import './App.css';
import {BrowserRouter , Routes ,Route ,Link} from 'react-router-dom'
import Home from './Component/Home.js'
import Form from './Component/Form';
import PlayerList from './Component/PlayerList'
function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/form">Form</Link>
      <Link to="/list">list</Link>


      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/list' element={<PlayerList/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
