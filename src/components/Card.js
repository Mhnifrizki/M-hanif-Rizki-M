 import React, { useState, useEffect } from 'react';
import './Style.css';  // Import CSS buat styling
import { Link } from "react-router-dom";

function Card() {
  const [content, setContent] = useState({ name: '', work: '' });

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3001/api/cv/get'); // Ganti path jadi /get
      const data = await response.json();
      setContent(data.content);
    }
    fetchData();
  }, []);

  return (
    <div className="card">
      <header>
        <h1>Curiculum Vitae</h1>
        <p>Posted by Hanif</p>
      </header>

      <nav>
  
     <button>Home</button> 
        <button className="btn btn-neutral-content">
          <Link to="/Profile">Overview</Link>
        </button>
        <button><Link to="/About">About Me</Link></button>
        <button><Link to="/Skill">Skill&Pengalaman</Link></button>
      </nav>
      
      <div className="profile">
        <img src="https://i.pinimg.com/736x/76/b4/34/76b43422ba4bd6acda96d4ed73f6683c.jpg" alt="Profile" />
        <h2>{content.name}</h2>
        <h3 className='kolor'>({content.work})</h3>
      </div>
      
      <footer>
        <p>Author: Hanif | <a href="mailto:ifannytzy@gmail.com" class="email-link">ifannytzy@gmail.com</a></p>
      </footer>
    </div>
  );
}

export default Card;
