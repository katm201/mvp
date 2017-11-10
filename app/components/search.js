import React from 'react';
  
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    event.preventDefault();
    console.log(this.state.searchValue);
    this.setState({
      searchValue: ''
    });
  }

  render() {
    return (
      <div>
        <h3>Search Bar Here</h3>
        <form onSubmit={ (event) => { this.handleSearch(event) }} >
          <input value={this.state.searchValue} onChange={ (event) => { this.setState({ searchValue: event.target.value }) } }/>
          <button type="button" onClick={ (event) => { this.handleSearch(event) } }/>
        </form>
      </div>
    );
  }
}

export default Search;
