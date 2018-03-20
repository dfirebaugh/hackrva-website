import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import TopNav from './Components/TopNav.js';
import Footer from './Components/Footer.js';
import Page from './Components/Page.js';
import App from './App';


// list of pages - includes pageid, name and path to route the page

const pages = [
    {pageId:17, name:'Home', path:'/'},
    {pageId:17, name: 'About', path:'/about'},
    {pageId:1280, name:'Art', path:'/art'},
    {pageId:1236, name:'Projects', path:'/projects'},
    {pageId:1214, name:'Tools', path:'/tools'},
    {pageId:1172, name:'Blog', path:'/blog'},
    {pageId:1103, name:'Visit', path:'/visit'},
    {pageId:939, name:'Electronics', path:'/electronics'},
    {pageId:15, name:'Contact', path:'/contact'},
    {pageId:13, name:'Calendar', path:'/calendar'},
    {pageId:11, name:'Membership', path:'/membership'}
  ];

// Link components in array to pass to TopNav
  const items = pages.map((curItem, i) => {
    return <Link key={i} className='menu' to={curItem.path}> {curItem.name}</Link>
})

// dynamically configure routes based on the pages array
const pageRoutes = pages.map((curItem, i) => {
    return  <Route key={i} exact path={curItem.path} render={ (props) => (
        <Page pageId = {curItem.pageId} />
    )}
    />
});

const Routes = (props) => (
    <Router>
        <div>
          <TopNav items={items} />

          {/* home page */}
          <Route exact path="/" render={(props) => (
              <App showSlider={true} />
            )}
          />

          {/* all other pages */}
          {pageRoutes}
        
        <Footer />
        </div>
        
      </Router>
  );


export default Routes;