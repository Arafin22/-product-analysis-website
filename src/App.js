import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews';
import DeshBoard from './Components/Deshboard/Deshboard';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound.js';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/reviews' element={<Reviews/>}/>
        <Route path='/deshBoard' element={<DeshBoard/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;