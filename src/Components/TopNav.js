import React, { Component } from 'react';;

class TopNav extends Component {
  render(){
    return (
        <div className='topNav'>

<nav className="navbar navbar-inverse navBarBlack navbar-toggleable-md navbar-dark bg-dark fixed-top">

    <a className="navbar-brand float-left" href="#Hack.RVA">Hack.RVA</a>
    <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse  navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav topNavRight mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#Home">Home
            <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Make">Make</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Calendar">Calendar</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Blog">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Wiki   ">Wiki</a>
        </li>
      </ul>
    </div>

</nav>
      </div>
    );
  }
}


export default TopNav;




// <nav className="navbar navBarBlack navbar-expand-lg navbar-dark bg-dark fixed-top">
//   <div className="container">
//     <a className="navbar-brand topNavLeft" href="#Hack.RVA">Hack.RVA</a>
//     <button className="navbar-toggler topNavRight" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarResponsive">
//       <ul className="navbar-nav mr-auto">
//         <li className="nav-item active">
//           <a className="nav-link" href="#Home">Home
//             <span className="sr-only">(current)</span>
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#About">About</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#Make">Make</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#Calendar">Calendar</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#Blog">Blog</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#Wiki   ">Wiki</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
