import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

  getMakeItems = (items) =>{
    let makeChildren = items.map( (curItem , i) => {
      return (
        <Link key={i} className='menu' to={curItem.path}> {curItem.name}</Link>
      )
    })
    return (
      <div class="menu nav-item dropdown">
        <a class="menu nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Make
        </a>
        <div class="menu dropdown-menu topMenu" aria-labelledby="navbarDropdownMenuLink">
          {makeChildren}
        </div>
      </div>
    )
  }
  render(){
    // console.log(this.props.makeItems)
    return (
      <div className='topNav'>

        <nav className="navbar navbar-inverse 
                navBarBlack navbar-toggleable-md 
                navbar-dark bg-dark fixed-top">

        {/* <a className="navbar-brand float-left" href="#Hack.RVA">Hack.RVA</a> */}
        <Link className='menu' to='/'>Hack.RVA</Link>
        <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse  navbar-collapse" id="navbarResponsive">
        {this.getMakeItems(this.props.makeItems)}
        {/* take in Link items from router */}
          { this.props.items ? this.props.items.map(i=>{
            return <div className='nav-link'>{i}</div>}) :
            items }
        {/* {this.props.makeItems ? this.props.makeItems.map(i=>i): ''} */}
        </div>

        </nav>
      </div>
    );
  }
}


export default TopNav;