// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from '../src/components/Profile';
import Skill from '../src/components/Skill2Pengalaman';
import './App.css';
import Card from '../src/components/Card';
import AboutMe from '../src/components/AboutMe';
import Dasboard from '../src/dasboard/dasbord';
import Admin from '../src/dasboard/admin';
import Konten from './dasboard/content';
function App() {
    return (
      <Router>

          <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/About" element={<AboutMe />} />
          <Route path="/Skill" element={<Skill/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/dasboard" element={<Dasboard/>} />
          <Route path="/konten" element={<Konten/>} />
          </Routes>

         
        
        
      </Router>
    );
}

export default App;
