import React from 'react';
  
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(this.state.searchValue);

    event.preventDefault();
    this.props.handleSearch(this.state.searchValue);
    this.setState({
      searchValue: ''
    });
  }

  render() {
    return (
      <div>
        <h4>Enter Street Address, City and Zipcode</h4>
        <form onSubmit={ (event) => { this.handleSubmit(event) }} >
          <input value={this.state.searchValue} onChange={ (event) => { this.setState({ searchValue: event.target.value }) } }/>
          <button type="button" onClick={ (event) => { this.handleSubmit(event) } }/>
        </form>
      </div>
    );
  }
}

export default Search;
