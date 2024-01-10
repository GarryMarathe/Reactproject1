import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

ReactDOM.render(

  <>
    <div className="cards">
      <div className="card ">
        < img src="https://wallpapercave.com/w/wp4056410.jpg" alt="myPic" className="card_img" />
        <div className="card_info">
          <span className="card_category"> A Netflix Original Series </span>
          <h3 className="card_title">Dark </h3>
          <a href="" target="_blank">
            <button> Watch Now </button>
          </a>
        </div>
      </div>
    </div>
  </>,
  document.getElementById('root')
);