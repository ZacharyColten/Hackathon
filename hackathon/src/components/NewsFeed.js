import React, { Component } from 'react';
import NewsItem from './NewsItem'

class NewsFeed extends Component {
  constructor(props) {
    super(props);
  this.state = {
    items: [],
    value: ''
    
  }
  
  this.onChange = this.onChange.bind(this)
}
  
  fetchItems = () => {
    this.state.value == '' ? window.alert("Type in the search bar and click submit to search articles") : 
    fetch(`http://hn.algolia.com/api/v1/search?query=${this.state.value}`)
      .then(results => results.json())
      .then(data => {
        this.setState({
          items: data.hits,
          value: ''
        })
      })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({value: e.target.value})
    this.fetchItems()
    
  }
  onChange(e){
    this.setState({value : e.target.value});
}
  render() {
    return (
      <div>
<form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.onChange}/>
        <input type="submit" value="Submit" />
        </form>
    <p style={{'background': '#f4f4f4',
      'padding': '10px',
      'borderBottom': '1px #ccc dotted', 'font-weight':'bold'}}>Algolia Hacker News Search</p>
      {this.state.items.length === 0 ? (
        <p>Type in search bar and click submit to search articles</p>
      ) : (
        
          this.state.items.map(item => {
            return <NewsItem  name={item.author} date={item.created_at} title={item.title} url={item.url}/>
          })
        
      )}
      
      </div>
    );
  }
}
export default NewsFeed;