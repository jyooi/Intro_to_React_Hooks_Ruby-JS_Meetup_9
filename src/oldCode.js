import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Ruby & JS meetup #9</h1>
      <h2>Normal class component</h2>
      <h3>My responsive component</h3>
      <MyResponsiveComponent />
      <h3>Input Component</h3>
      <InputComponent />
    </div>
  );
}

class MyResponsiveComponent extends React.Component {
  render() {
    return (
      <div>
        <HandleHeight />
        <HandleWidth />
      </div>
    );
  }
}

class HandleHeight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerWidth
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleHeight);
  }
  componentWillUnMount() {
    window.removeEventListener("resize", this.handleHeight);
  }
  handleHeight = () => {
    this.setState({ height: window.innerHeight });
  };
  render() {
    return <p>This is my height : {this.state.height} px </p>;
  }
}

class HandleWidth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
    this.handleWidth = this.handleWidth.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleWidth);
  }

  componentWillUnMount() {
    window.removeEventListener("resize", this.handleWidth);
  }

  handleWidth = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    return <p>This is my width : {this.state.width} px </p>;
  }
}

class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "bob",
      password: "alice"
    };
  }

  handleInput = name => event => {
    this.setState({ [name]: event.target.value });
  };
  render() {
    return (
      <div>
        <label>UserName:</label>
        <input type="text" onChange={this.handleInput("userName")} />
        <br />
        <label>Password:</label>
        <input type="password" onChange={this.handleInput("password")} />
        <p>My UserName:{this.state.userName}</p>
        <p>My Password:{this.state.password}</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
