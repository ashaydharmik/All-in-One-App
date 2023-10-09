
import './App.css';
import Category from './components/Category/Category';
import News from './components/News/News';
import Register from './components/Register/Register';
import {Routes, Route} from "react-router-dom"



function App() {
  return (
    
     <>
     <Routes>
     <Route path="/" element={<Register/>}/>
    <Route path="/category" element={<Category/>}/>
    <Route path="/news" element={<News/>}/>
     </Routes>
     
     </>
  
  );
}

export default App;
