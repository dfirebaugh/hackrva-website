import React, { Component } from 'react';;

// placeholder items until I start passing items from the router
let items = <ul className="navbar-nav topNavRight mr-auto">
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



class TopNav extends Component {
  render(){
    // this.props.items.map(item=> console.log(item))
    // console.log(this.props.items)
    return (
        <div className='topNav'>

<nav className="navbar navbar-inverse navBarBlack navbar-toggleable-md navbar-dark bg-dark fixed-top">

    <a className="navbar-brand float-left" href="#Hack.RVA">Hack.RVA</a>
    <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse  navbar-collapse" id="navbarResponsive">
    
    {/* take in Link items from router */}
      { this.props.items ? this.props.items.map(i=>i) : items }
    </div>

</nav>
      </div>
    );
  }
}


export default TopNav;