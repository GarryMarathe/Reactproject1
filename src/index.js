import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Card(props){
  return(
    <>
    <div className="cards">
      <div className="card ">
        < img src={props.imgsrc} alt="myPic" className="card_img" />
        <div className="card_info">
          <span className="card_category">{props.title}</span>
          <h3 className="card_title">{props.sname}</h3>
          <a href={props.link} target="_blank">
            <button> Watch Now </button>
          </a>
        </div>
      </div>
    </div>

  
  </>
  )
}

ReactDOM.render(
<>
<Card imgsrc="https://wallpapercave.com/w/wp4056410.jpg"
 title="A Netflix Original Series" 
 sname="DARK"
 link="https://www.netflix.com/in/title/80990668?source=35"/>
<Card />
<Card />


</>
,
  document.getElementById('root')
);