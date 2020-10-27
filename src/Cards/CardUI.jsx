import React from 'react';
import {Button} from 'react-bootstrap';


import './card-style.css';

const Card = props =>{
  return(
    <div className="card text-center ">
      <div className="overflow">
        <img src={props.img} alt="Image 1" className="card-img-top"/>
      </div>
      <div className="card-body text-dark">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, iusto eveniet ut error, suscipit alias reprehenderit incidunt nemo non provident corporis ea quas magnam minus quo dignissimos cumque labore! Veritatis?</p>
        <a href="#" className="btn btn-outline-primary">See more here</a>
      </div>
    </div>
  );

}




export default Card;