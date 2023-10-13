
import './App.css';
import Category from './components/Category/Category';
import Movie from './components/Movies/Movie';
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
    <Route path="/movie" element={<Movie/>}/>
     </Routes>
     
     </>
  
  );
}

export default App;
