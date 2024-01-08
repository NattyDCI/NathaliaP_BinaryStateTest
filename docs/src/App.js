
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Details from "./components/Details.jsx"

function App() {
  return (
    <div className='App'>

      <Link to={"/details"} className='link'>
       Details
      </Link> 
          
      <Routes>
        <Route path='/details' element={<Details/>}/>  
      </Routes>

    </div>
  );
}

export default App;
