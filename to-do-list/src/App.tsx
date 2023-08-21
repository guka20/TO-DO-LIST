import React from "react";
import { Todo } from "./components";

export const App = () => {
  return (
    <div className="main">
      <h1>My Todos</h1>
      <div className="container">
        <input
          type="text"
          placeholder="Ask something to do"
          className="input"
        />
        <button className="save-btn">Save</button>
      </div>
      <div className="todos"> 
      <Todo text="Install Nodejs" id={5}/>
      </div>
    </div>
  );
};
