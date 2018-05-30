import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
// import { Link } from 'react-router-dom';

class Blog extends Component {
  componentDidMount(){
    this.props.postOn.then((res)=> {
      this.setState({blogPosts:res})
    })
  }
  render(){
    this.state && console.log(this.state.blogPosts);

    
    const cards = this.state && this.state.blogPosts.map( (x, i) => (
      <div key={i} className="blog-post-card">
        <div className="post-title"> 
          {/* <Link > */}
          {ReactHtmlParser(x.title.rendered)}
          
          {/* </Link> */}
        </div> 
        <div className="date"> {x.date} </div>
        {/*<div 
          className="excerpt" 
          dangerouslySetInnerHTML={{__html: x.excerpt.rendered }}> </div>*/}
          {ReactHtmlParser(x.content.rendered)}
      </div>
  ))

    return (
      <div className='container blog-container'>
      
        { cards } 
        

        <style jsx>{`
              .blog-container{
                // background: grey;
                color:white;
                top:5em;
                margin-bottom: 5em;
              }
              .blog-post-card{
                background:grey;
                padding:2em;
                margin: 5em;
                border:solid lightgrey 4px;
              }
              `
        }
        </style>

      </div>
    );
  }
}


export default Blog;