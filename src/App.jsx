import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/*import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import News from './pages/News';*/
import Header from './components/Header.js'
import Sidebar from './components/Sidebar.js'
import Footer from './components/Footer.js'
import './App.css';

function App() {
  return (
    <div className='webpage'>
      <Header/>
      <Sidebar/>
      <div className="main-content">
        <h2>Brain stuff</h2>
        <div className="row">
          
          <div className="news-item"></div>
          <div className="news-item"></div>
          <div className="news-item"></div>
          <div className="news-item"></div>
          <div className="news-item"></div>
          {/*<div className="news-item"></div>
          <div className="news-item"></div>
          <div className="news-item"></div>*/}
        </div>
        <h2>Heart stuff</h2>
        <div className="row">
          
          <div className="news-item"></div>
          <div className="news-item"></div>
          <div className="news-item"></div>
          <div className="news-item"></div>
          <div className="news-item"></div>
          {/*<div className="news-item"></div>*/}
        </div>
        <h2>Bone stuff</h2>
        <div className="row">
          
          <div className="news-item">
            <p>testing123</p>
          </div>
          <div className="news-item"></div>
          <div className="news-item"></div>
          <div className="news-item"></div>
          <div className="news-item"></div>
          <div className="news-item"></div>
        </div>
        <h2>Kidney stuff</h2>
        <div className="row bottom">
          
          <div className="news-item"></div>
          <div className="news-item"></div>
          <div className="news-item"></div>
          <div className="news-item"></div>
          <div className="news-item"></div>
        </div>
        {/* insert rows pertaining to different medical specialities here. 
        Rows pull medical news from different publications*/}
        {/* insert format for little boxes here */}
        {/*insert rss feed here, to go inside little boxes */}
        {/*Insert footer here */}
      
      </div>
      <Footer/>
      {/*<div className="footer">
          About us-Contact us- etc
      </div>*/}
    </div>
    
  );
}

export default App;