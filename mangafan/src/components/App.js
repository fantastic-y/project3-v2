import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './BookList';
import BookEdit from './BookEdit';
import Home from './Home';
import Billboard from './Billboard';
import About from './About';
import AppNavbar from './Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        booklists: [],
        isLoading: true
    };
  }

  componentDidMount() {
      this.setState({isLoading: true});

      fetch('http://localhost:8000/api/booklists')
          .then(response => response.json())
          .then(data => this.setState({booklists: data, isLoading: false}));
  }

  handleSave = (props) => {
    this.setState({saved: !props.saved});
    console.log("Saved to the list!");
}

  render() {
    return (
      <Router>
        <AppNavbar />
        <Switch>
          <Route exact path='/' render={() => (
            <Home
              booklists={this.state.booklists}
            />
          )}/>
          <Route exact path='/booklists' component={BookList}/>
          <Route exact path='/booklists/:id' component={BookEdit}/>
          <Route exact path="/billboard" component={Billboard}/>
          <Route exact path="/about" render={() => 
            <About
              booklists = {this.state.booklists}
              handleSave = {this.handleSave}
            />
          }/>
        </Switch>
      </Router>
    )
  }
}

export default App;