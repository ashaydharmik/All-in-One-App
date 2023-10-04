
import './App.css';
import Category from './components/Category/Category';
import Detail from './components/Details/Detail';
import Register from './components/Register/Register';
import {Routes, Route} from "react-router-dom"



function App() {
  return (
    
     <>
     <Routes>
     <Route path="/" element={<Register/>}/>
    <Route path="/category" element={<Category/>}/>
    <Route path="/details" element={<Detail/>}/>
     </Routes>
     
     </>
  
  );
}

export default App;
