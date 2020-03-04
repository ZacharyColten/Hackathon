import React, { Component } from 'react'

class NewsItem extends Component {

  render() {
    return(
      <div style={{'background': '#f4f4f4',
      'padding': '10px',
      'borderBottom': '1px #ccc dotted'}}>
    <b>Author:</b> {this.props.name} 
    <br></br>
    <b>Date:</b> {this.props.date} 
    <br></br>
    <b>Title:</b> {this.props.title}
    <br></br>
    <a href={this.props.url} target="_blank">Click here to open this article in a new tab</a>
    </div>
    )
    }
  }




export default NewsItem