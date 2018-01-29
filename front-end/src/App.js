import React, { Component } from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import Home from './Home';
import Submit from './Submit';

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/all">Home</Link>{" - "}
        <Link to="/submit">Submit</Link>
        <Switch>
          <Route exact path="/all" component={Home}/>
          <Route path="/submit" component={Submit}/>
        </Switch>
      </div>
    );
  }
}

export default App;
