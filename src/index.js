import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wrote: '',
    };
  }

  render() {
    return (
      <div>
        <h2>Basic React component</h2>
        <div>
          <i>Write here:</i>

          <input
            type="text"
            value={/* state value here */}
            onChange={/* a callback on user key pressed  */}
            placeholder="write something"
          />
        </div>

        <br />

        <div>
          <i>What you wrote in real time:</i>

          <p className="recopy-text">{/* state value here */}</p>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
