import "./App.css";
import HomePages from "./components/HomePages";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Router>
        <Header />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch></Switch>
      </Router>
    </>
  );
}

export default App;
