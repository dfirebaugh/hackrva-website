import React from 'react';
import MainSlider from './Components/MainSlider.js';
import {Link} from 'react-router-dom';
import hackathon from './assets/HackathonOct2016.mp4';
import VideoCover from 'react-video-cover';
import './App.css';
//home page -- mainly just loads the MainSlider component

const App = (props) =>  {
  const video = <VideoCover  
                    style={{
                      objectFit: 'cover',
                      width: 'auto',
                      height: '100vh',
                      // position: 'fixed',
                      // top: 0,
                      // left: 0,
                      controls:'muted',
                    zIndex: -1,
                    }}
                    videoOptions={{

                      src:hackathon,
                      autoPlay: true,
                      loop: true,
                    }}
                    >
              
                </VideoCover>
    return (
      <div className="App">
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
        {props.showSlider === true ? <MainSlider /> : video }


        <div className="separator"> 
        {/* leaving this blank */}
        </div> 


          {props.children}


          <style jsx>{`
                .separator{
                  height:8em;
                  background-color: rgb(95, 95, 95);
                  margin-bottom: -7em;
                }
                `
        }
        </style>
      </div>
    );
}

export default App;
