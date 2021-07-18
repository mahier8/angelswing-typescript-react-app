import React, { FC } from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import History from "./pages/History";
import "./App.css";

const App: FC = () => {
  return (
    <div>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/order" component={Order} />
          <Route path="/history" component={History} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
