import React from "react";
import "./styles.css";
import User from "./User";

export const MyContext = React.createContext();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      value: 10,
      version: 17
    };
  }
  render() {
    return (
      <div className="App">
        <MyContext.Provider value={this.state}>
          <User />
        </MyContext.Provider>
      </div>
    );
  }
}
