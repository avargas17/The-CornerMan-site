import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UFC from './UFC/UFC_main';
import Home from './Home'
import ONE from './ONE-FC/One_main'


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path = "/UFC" element={<UFC/>}/>
        <Route path = "/ONE" element={<ONE/>}/>
      </Routes>
    </Router>
  );
}
export default App