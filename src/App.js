import React, { Component } from "react";
import IcoMoon from "react-icomoon";
import "./App.css";

class App extends Component {
  state = {
    value: false
  };

  onChange = () => {
    this.setState(prevState => ({
      value: !prevState.value
    }));
  };

  render() {
    const { value } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h3>
            Made with <IcoMoon icon="heart" />
          </h3>
          <p>
            <label style={{ fontSize: 18 }}>
              <input type="checkbox" onChange={this.onChange} /> value:{" "}
              {value.toString()}
            </label>
          </p>
            <IcoMoon icon={value ? "play3" : "pause2"} />
        </header>
      </div>
    );
  }
}

export default App;
