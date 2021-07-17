import React, {FC} from 'react';
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Overview from './pages/Overview';

const App: FC = () => {
  return (
    <div>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/overview" component={Overview} exact></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
