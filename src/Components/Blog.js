import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
// import { Link } from 'react-router-dom';

class Blog extends Component {
  componentWillMount(){
    this.props.postOn.then((res)=> {
      this.setState({
        blogPosts:res, 
        curPage: 1
      })
    })
  }
  handleOlderClick = () => {
    // this.setState({curPage: this.state.curPage + 1})
    this.getPage(1)
  }
  handleNewerClick = () => {
    // this.setState({curPage: this.state.curPage + 1})
    this.state.curPage + -1 > 0 && this.getPage(-1)
  }
  getPage = (pageNum) => {
    let dataURL = `https://www.hackrva.org/blog/wp-json/wp/v2/posts?page=${this.state.curPage + pageNum}`;
    
    // console.log('curPage: ', this.state.curPage)
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        // console.log('res: ', this.state.curPage, res)
        this.setState({
          blogPosts: res,
          curPage: this.state.curPage + pageNum
        })
        .catch(() => {
          console.log("error")
        })
})

  }
  render(){
    // this.state && console.log(this.state.blogPosts);
    window.scrollTo(0, 0)

    
    let cards = this.state && this.state.blogPosts.map( (x, i) => (
      <div key={i} className="blog-post-card">
        <div className="post-title"> 
          {/* <Link > */}
          <h3>
          {ReactHtmlParser(x.title.rendered)}
          </h3>
          {/* </Link> */}
        </div> 
        {/* TODO :: pretty up the date */}
        <h4 className="date"> {x.date} </h4>
        {/*<div 
          className="excerpt" 
          dangerouslySetInnerHTML={{__html: x.excerpt.rendered }}> </div>*/}
          {ReactHtmlParser(x.content.rendered)}
      </div>
  ))

    return (
      <div className='container blog-container'>
      
        { cards } 


        <div className='container btn-container'> 
          <button className="col-md-6" onClick={() => this.handleOlderClick()}> older </button> 
          <button className="col-md-6" onClick={() => this.handleNewerClick()}> newer </button> 
        </div>




        <style jsx>{`
              .blog-container{
                // background: grey;
                color:white;
                top:5em;
                margin-bottom: 5em;
              }
              .blog-post-card{
                background:rgb(95, 95, 95);
                padding:2em;
                margin: 5em;
                border:solid lightgrey 4px;
              }
              .btn-container{
                display:flex;
              }
              .btn-container button{
                color:white;
                background:black;
                padding:15px;
              }
              img {
                max-width:100%;
                height:auto;
                width: auto;
              }
              `
        }
        </style>

      </div>
    );
  }
}


export default Blog;