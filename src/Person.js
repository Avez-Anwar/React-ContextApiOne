import React from "react";
import { MyContext } from "./App";

function Person() {
  return (
    <div>
      <MyContext.Consumer>
        {(data) => (
          <h1>
            {data.name}
            person {data.version}
          </h1>
        )}
      </MyContext.Consumer>
    </div>
  );
}

export default Person;
