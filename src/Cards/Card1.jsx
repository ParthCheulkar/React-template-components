import React , {Component} from 'react';
import Card from './CardUI';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';


class Card1 extends Component{
  render(){
    return(
      <div className="container-fluid justify-content-center d-flex">
        <div className="col-md-4">
          <Card img={img1} title="Guten Tag"/>
        </div>
        <div className="col-md-4">
          <Card img={img2} title="Hola" />
        </div>
        <div className="col-md-4">
          <Card img={img3} title="Namaste" />
        </div>
      </div>
    );
  }
}
export default Card1;