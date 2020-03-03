import React, { Component } from 'react';
import NewsItem from './NewsItem'

class NewsFeed extends Component {

  state = {
    items: [],
    value: ''
  }

  fetchItems = (e) => {
    fetch(`https://hn.algolia.com/api/v1/search_by_date?query=...
    `)
      .then(results => results.json())
      .then(data => {
        this.setState({
          value: e.target.value,
          items: data
        })


      })

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          {/* they value of the input is tied to this.state.value so when a user types the handleChange method changes this.state.value to match*/}
          <input type="text" value={this.state.value} onChange={this.fetchItems} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        {
          this.state.items.map(item => {
            return <NewsItem name={item.story_title} date={item.created_at}/>
          })
        }
      </div>
    );
  }
}
export default NewsFeed;