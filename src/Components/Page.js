import React, { Component } from 'react';

// pretty generic component to display wordpress pages
// the pageId gets passed in as a property to this component to determine which page to load.

class Page extends Component {
componentWillMount() {
  this.props.pageOn.then((result)=> this.setState({pageContent: result.filter(x => x.id === this.props.pageId)[0]}))
}

render() {
  return (
      <div>
          {this.state && <div 
              className="container page-container" 
              dangerouslySetInnerHTML={{__html: this.state.pageContent.content.rendered }}>
          </div>}
      </div>
      )
  }
}

export default Page;