import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './BookList';
import BookEdit from './BookEdit';
import Home from './Home';
import AppNavbar from './Navbar';

class App extends Component {

  render() {
    return (
      <Router>
        <AppNavbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/booklists' component={BookList}/>
          <Route exact path='/booklists/:id' component={BookEdit}/>
        </Switch>
      </Router>
    )
  }
}

export default App;