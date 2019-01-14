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
            Made with <IcoMoon className="heart" icon="heart" />
          </h3>
          <span>
            <div className="display-flex align-items-center">
              <a href="https://github.com/aykutkardas">
                <IcoMoon icon="github" /> aykutkardas
              </a>
            </div>
            <div className="display-flex align-items-center">
              <a href="https://twitter.com/aykutkardas">
                <IcoMoon icon="twitter" /> aykutkardas
              </a>
            </div>
          </span>
          <p>
            <label>
              <input type="checkbox" onChange={this.onChange} />{" "}
              {"value: " + value.toString()}
            </label>
          </p>
          <IcoMoon icon={value ? "play3" : "pause2"} />
        </header>
      </div>
    );
  }
}

export default App;
