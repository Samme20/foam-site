import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Header from './Components/header';
import LandingPage from './Screens/landingpage';
import Shop from './Screens/shop';

function App() {
  return (
    <div className="App">
         
      <Router>
        <Switch>

        <Route path="/shop">
          <Header />
          <Shop />
        </Route>

        <Route path="/">
          <Header />
          <LandingPage />
        </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
