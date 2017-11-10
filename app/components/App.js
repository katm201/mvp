import React from 'react';
import UserMap from './map';
import Search from './search';
import RepList from './repList';

class App extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>App level</h3>
        <Search />
        <UserMap />
        <RepList />
      </div>
    );
  }
}

export default App;
