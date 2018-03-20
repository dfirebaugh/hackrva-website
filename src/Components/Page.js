import React, { Component } from 'react';

// pretty generic component to display wordpress pages
// the pageId gets passed in as a property to this component to determine which page to load.

class Page extends Component {
  constructor() {
    super();
    this.state = {
      pageContent: {}
    }
  }

componentDidMount() {
    let dataURL = `https://www.hackrva.org/blog/wp-json/wp/v2/pages/${this.props.pageId}`;
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          pageContent: res.content
        })
      })
  }

render() {
    return (
        <div>
            <div 
                className="container page-container" 
                dangerouslySetInnerHTML={{__html: this.state.pageContent.rendered }}>
            </div>
        </div>
        )
    }
}

export default Page;