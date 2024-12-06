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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  return (
    <div className='webpage'>
      <Header/>
      <Sidebar/>
      <div className="main-content">
        <h2>Brain stuff</h2>
        
        <div className="row">
          <Slider {...settings}>
          <div className="news-item">1</div>
          <div className="news-item">2</div>
          <div className="news-item">3</div>
          <div className="news-item">4</div>
          <div className="news-item">5</div>
          <div className="news-item">6</div>
          <div className="news-item">7</div>
          <div className="news-item">8</div>
          </Slider>
        </div>
        
        <h2>Heart stuff</h2>
        <div className="row">
          <Slider {...settings}>
          <div className="news-item">1</div>
          <div className="news-item">2</div>
          <div className="news-item">3</div>
          <div className="news-item">4</div>
          <div className="news-item">5</div>
          <div className="news-item">6</div>
          </Slider>
        </div>
        <h2>Bone stuff</h2>
        <div className="row">
          <Slider {...settings}>
          <div className="news-item">
            <p>testing123</p>
          </div>
          <div className="news-item">1</div>
          <div className="news-item">2</div>
          <div className="news-item">3</div>
          <div className="news-item">4</div>
          <div className="news-item">5</div>
          <div className="news-item">6</div>
          <div className="news-item">7</div>
          <div className="news-item">8</div>
          </Slider>
        </div>
        <h2>Kidney stuff</h2>
        <div className="row bottom">
          <Slider {...settings}>
          <div className="news-item">1</div>
          <div className="news-item">2</div>
          <div className="news-item">3</div>
          <div className="news-item">4</div>
          <div className="news-item">5</div>
          <div className="news-item">6</div>
          <div className="news-item">7</div>
          <div className="news-item">8</div>
          </Slider>
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