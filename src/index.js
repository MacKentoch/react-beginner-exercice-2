import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wrote: ''
    };

    // ensure this binding here
  }

  render() {
    return (
      <div>
        <h2>Basic React component</h2>
        <div>
          <i>Write here:</i>

          <input
            type="text"
            value={/* wrote value from state */}
            onChange={/* a callback to call each user key pressed (beware this binding) */}
            placeholder="write something"
          />

        </div>

        <br />

        <div>
          <i>What you wrote in real time:</i>

          <p className="recopy-text">{/* wrote value from state */}</p>
          
        </div>

      </div>
    );
  }
}


render(<App />, document.getElementById('root'));
