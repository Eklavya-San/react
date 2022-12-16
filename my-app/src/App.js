import logo from './logo.svg';
import './App.css';

function App() {
  let [emparr,setemparr]=useState([
    {empid:"12",ename:"Rajan",sal:"30000"},
    {empid:"13",ename:"eklavya",sal:"35000"},
    {empid:"14",ename:"Nikhil",sal:"45000"},
    {empid:"15",ename:"Akshay",sal:"55000"}

  ])
  const insertData=(ob)=>{
    setemparr([...emparr,{...ob}]);
  }
  const deleteemployee=(id)=>{
    let newarr = emparr.filter(ob.empid!=id);
    setemparr(newarr);
  }
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            Hello
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
