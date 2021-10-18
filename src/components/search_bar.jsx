import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    }
  }

  handleUpdate = (event) => {
    // Change the state of term
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input
      value={this.state.term}
      type="text"
      className="form-control form-search"
      onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
