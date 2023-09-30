
import './App.css';
import Category from './components/Category/Category';
import Register from './components/Register/Register';
import {Routes, Route} from "react-router-dom"



function App() {
  return (
    
     <>
     <Routes>
     <Route path="/" element={<Register/>}/>
    <Route path="/category" element={<Category/>}/>
     </Routes>
     
     </>
  
  );
}

export default App;
