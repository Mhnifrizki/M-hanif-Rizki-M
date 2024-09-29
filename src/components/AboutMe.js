import React from 'react';
// import Navigation from './Navigation';
import './Style.css';  // Import CSS buat styling
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div className="card">
            <header>
                <h1>Curiculum Vitae</h1>
                <p>Posted by Hanif</p>
            </header>
            <nav>
                <button className="btn btn-neutral-content">
                    <Link to="/">Home</Link>
                </button>
                <button><Link to="/Profile">Overview</Link></button>
                <button>About me</button>
                <button><Link to="/Skill">Skill&Pengalaman</Link></button>
            </nav>
            <h2>Nama: Hanif</h2>
            <div className="profile">
            Halo! Saya adalah seorang Web Developer dengan pengalaman di bidang
            HTML, CSS, dan Javascript. Saya magang di beberapa tempat untuk mengembangkan skill saya lebih lanjut.
            </div>
            <footer>
                <p>Author: Hanif | mzakiw2007@gmail.com</p>
            </footer>
        </div>
    );
}

export default Profile;