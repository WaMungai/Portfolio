import React,{useState, useEffect} from 'react'
import './App.css';
import PreLoader from './components/Libaries/PreLoader';
import Navbar from './components/Navbar';
import Home from './components/Home/index.jsx';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import ScrollToTop from './components/Libaries/ScrollToTop';
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [load,updateLoad] = useState(true)

  useEffect(() =>{
    const timer = setTimeout(() =>{
      updateLoad(false)
    },1200);
    return () => clearTimeout(timer)
  },[])

  return (
    <BrowserRouter>
      <PreLoader load={load} />
        <div className="App" id={load ? "no-scroll":"scroll"}>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/project" element={<Projects />}/>
        <Route path="/about" element={<About />}/>
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
      <Footer />
     </div>
    </BrowserRouter>
  
  );
}

export default App;
