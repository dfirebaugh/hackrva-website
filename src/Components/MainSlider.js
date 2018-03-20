import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import img1 from '../assets/IMG_4214.JPG';
import img2 from '../assets/IMG_7702.JPG';
import img3 from '../assets/IMG_20170401_153700.jpg';
import img4 from '../assets/IMG_20170506_182745.jpg';
import img5 from '../assets/IMG_20170826_202858.jpg';

class MainSlider extends Component {
  render(){
    return (

      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="sliderOverlay">
        <div className='joinBtn container'>
        {/* Link to membership page */}
        <Link className='menu' to='/membership'>
          <button className='text-center pagination-centered' >
            <h2>Become a Member</h2>
          </button>
          </Link>
        </div>

      </ol>
      <div className="carousel-inner" role="listbox">

        <div className="carousel-item active" style={{backgroundImage: `url(${img5})`}}>
          <div className="carousel-caption d-none d-md-block">
          </div>
        </div>


        <div className="carousel-item" style={{backgroundImage: `url(${img2})`}}>
          <div className="carousel-caption d-none d-md-block">
          </div>
        </div>

        <div className="carousel-item" style={{backgroundImage: `url(${img4})`}}>
        <div className="carousel-caption d-none d-md-block">
        </div>
        </div>

        <div className="carousel-item" style={{backgroundImage: `url(${img1})`}} >
        <div className="carousel-caption d-none d-md-block">
        </div>
        </div>


        <div className="carousel-item" style={{backgroundImage: `url(${img3})`}}>
        <div className="carousel-caption d-none d-md-block">
        </div>
        </div>


        <a className="carousel-control-prev sliderControlBtns" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next sliderControlBtns" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
        </a>

      </div>
      </div>


    );
  }
}


export default MainSlider;
<<<<<<< HEAD
=======


// <div className='no-padding carousel-item' style={sliderStyle} draggable='false'>
// <h1> Have fun, make stuff!</h1>
//
// <button>Join Us</button>
//   </div>
>>>>>>> e8f75a2148f00a060e0fb8fce0064639aab5e299
