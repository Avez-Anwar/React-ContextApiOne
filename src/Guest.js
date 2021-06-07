import React from "react";
import { MyContext } from "./App";
import Person from "./Person";

function Guest() {
  return (
    <div>
      <MyContext.Consumer>
        {(data) => (
          <h1>
            {data.name}
            {data.value}
            <br />
            {data.version}
          </h1>
        )}
      </MyContext.Consumer>
      <Person />
    </div>
  );
}

export default Guest;
