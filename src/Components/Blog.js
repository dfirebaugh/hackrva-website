import React, { Component } from 'react';
// import { Link } from 'react-router-dom';


class Blog extends Component {
  componentDidMount(){
    this.props.postOn.then((res)=> {
      this.setState({blogPosts:res})
    })
  }
  render(){
    this.state && console.log(this.state.blogPosts);

    
    const cards = this.state && this.state.blogPosts.map( x => (
      <div className="blog-post-card">
        <div className="post-title"> 
          {/* <Link > */}
          { x.title.rendered} 
          {/* </Link> */}
        </div> 
        <div className="date"> {x.date} </div>
        {/* <div 
          className="excerpt" 
          dangerouslySetInnerHTML={{__html: x.excerpt.rendered }}> </div> */}
      </div>
  ))

    return (
      <div className='container blog-container'>
      
        { cards } 
        

        <style jsx>{`
              .blog-container{
                background: grey;
                color:white;
                top:5em;
                margin-bottom: 5em;
              }
              .blog-post-card{
                padding:2em;
              }
              `
        }
        </style>

      </div>
    );
  }
}


export default Blog;