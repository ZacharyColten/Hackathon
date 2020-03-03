import React, { Component } from 'react'

class NewsItem extends Component {

  render() {
    return(
      <div>
    Title: {this.props.name} Date: {this.props.date}
    </div>
    )
    }
  }




export default NewsItem