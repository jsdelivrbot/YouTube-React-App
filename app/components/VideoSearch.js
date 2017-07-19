import React from 'react';

class VideoSearch extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = { search_term: '' };
  }

  onSearchTerm = (e) =>
  {
     this.setState({search_term: e.target.value})
     this.props.onSearchTerm(e.target.value);
  }

  render()
  {
      var {search_term} = this.state;

      return (
              <div>
                <input value = { search_term } onChange={this.onSearchTerm} placeholder = "Search for videos..."  />
              </div>
             )
  }
}

module.exports = VideoSearch;
