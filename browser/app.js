import React from 'react';
import ReactDOM from 'react-dom';
import AllUsers from './AllUsers';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <AllUsers />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react'));
