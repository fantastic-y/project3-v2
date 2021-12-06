import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './BookList';
import BookEdit from './BookEdit';
import Home from './Home';
import Billboard from './Billboard';
import About from './About';
import Signin from './Login';
import AppNavbar from './Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        booklists: [],
        isLoading: true,
        sortType: "asc",
        listNum: "",
    };
    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount() {
      this.setState({isLoading: true});

      fetch('http://localhost:8000/api/booklists')
          .then(response => response.json())
          .then(data => this.setState({booklists: data, isLoading: false}));

  }

  handleSave = (props) => {
    this.setState({saved: !props.saved});
    console.log(props.saved + "Updated saved status!");
  }

  onSort = (listNum, sortType) => {
  listNum.sort((a, b) => {
    const isReversed = sortType === "asc" ?1 : -1;
    return isReversed * a.title.localeCompare(b.title);
  })
  this.setState({ sortType });
}

  render() {
    return (
      <Router>
        <AppNavbar />
        <Switch>
          <Route exact path='/' render={() => (
            <Home
              booklists={this.state.booklists}
              handleSave = {this.handleSave}
              sortType={this.state.sortType}
              listNum={this.state.listNum}
              onSort={this.onSort}
            />
          )}/>
          <Route exact path='/login' component={Signin}/>
          <Route exact path='/booklists' render={() => 
            <BookList
              booklists = {this.state.booklists}
              handleSave = {this.handleSave}
            />
          }/>
          <Route exact path='/booklists/edit/:id' component={BookEdit}/>
          <Route exact path="/billboard" render={() => 
            <Billboard
              booklists = {this.state.booklists}
              handleSave = {this.handleSave}
            />
          }/>
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