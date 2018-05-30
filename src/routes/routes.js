import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top'
import TopNav from '../Components/TopNav';
import Footer from '../Components/Footer';
import Page from '../Components/Page';
import App from '../App';
import {withPageData} from '../context/page-context';


const PageWithData = withPageData(Page);

//manually mapping the pages with names
const pages = [
    {pageId:17, name:'Home', path:'/'},
    {pageId:17, name: 'About', path:'/about'},
    {pageId:13, name:'Calendar', path:'/calendar'},
    // {pageId:1172, name:'Blog', path:'/blog'},
    // {pageId:15, name:'Contact', path:'/contact'},
    {pageId:11, name:'Membership', path:'/membership'},
    {pageId:1103, name:'Visit', path:'/visit'},
    {pageId:1280, name:'Art', path:'/art', parent: 'Make'},
    {pageId:1236, name:'Projects', path:'/projects', parent: 'Make'},
    {pageId:1214, name:'Tools', path:'/tools', parent: 'Make'},
    {pageId:939, name:'Electronics', path:'/electronics', parent: 'Make'},
  ];



// Link components in array to pass to TopNav
const items = pages.map((curItem, i) => {
    //console.log(curItem.parent)
    if(curItem.parent === 'Make'){
      
    }
    else{
      return <Link key={i} className='menu' to={curItem.path}> {curItem.name}</Link>
    }
})

const makeItems = pages.filter(curItem => {
  return curItem.parent === 'Make';
})

// dynamically configure routes based on the pages array
const pageRoutes = pages.map((curItem, i) => {
  return  <Route key={i} exact path={curItem.path} render={ (props) => (
    <PageWithData key={curItem.pageId} pageId = {curItem.pageId} />
  )}
  />
});


// console.log('makeItems: ', makeItems)
const Routes = (props) => (
    <Router >

      <ScrollToTop>
        <div>
          <TopNav items={items} makeItems={makeItems} />

          {/* home page */}
          <Route exact path="/" render={(props) => (
              <App showSlider={true} />
            )}
          />
          <Route exact path="/hackrva-website" render={(props) => (
              <App showSlider={true} />
            )}
          />

          {/* all other pages */}
          {pageRoutes}
        <Footer />
        </div>
        
      </ScrollToTop>
    </Router>
  );


export default Routes;