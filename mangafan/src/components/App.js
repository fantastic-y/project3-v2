import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './BookList';
import BookEdit from './BookEdit';
import Home from './Home';
import Billboard from './Billboard';
import BillboardAction from './Billboard-action';
import BillboardComedy from './Billboard-comedy';
import BillboardDrama from './Billboard-drama';
import BillboardMystery from './Billboard-romance';
import About from './About';
import AppNavbar from './Navbar';
import AppNavlog from './Navbar-login';
import FooterPage from './Footer';
import { newsData } from './newsdetails';
import AllNews from './Newspage';
import MangaDetails from './Manga';
import Request from './Request';
// import Login2 from './NewLog';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        booklists: [],
        newsLists: newsData,
        isLoading: true,
        sortType: "asc",
        listNum: "",
        billlist: "",
        filterGenre: "",
        isLogged: false,
    };
    this.handleLogIn=this.handleLogIn.bind(this);
    this.handleLogOut=this.handleLogOut.bind(this);
    this.handleSave=this.handleSave.bind(this);
  }

  componentDidMount() {
      this.setState({isLoading: true});

      fetch('http://localhost:8000/api/booklists')
          .then(response => response.json())
          .then(data => this.setState({booklists: data, isLoading: false}));
  }

  handleLogIn = () => {
    this.setState({isLogged: true });
  }

  handleLogOut = () => {
    this.setState({isLogged: false });
    sessionStorage.clear();
        alert("Logged out successfully!");
        window.location.reload();
  }

  handleSave = (props) => {
    this.setState({saved: !props.saved});
    console.log(props.saved + " Updated saved status!");
  }

  handleAdd = (props) => {
    this.setState({score: (props.score -=1 ) })
    console.log(props.score);
  }

  onSort = (listNum, sortType) => {
  listNum.sort((a, b) => {
    if (sortType==="default") {
      return a._id.localeCompare(b._id)
    } else {
    const isReversed = sortType === "asc" ?1 : -1;
    return isReversed * a.title.localeCompare(b.title);}
  })
  this.setState({ sortType });
  }

  render() {
    return (
      <Router>
        {!this.state.isLogged && 
        <AppNavbar
          handleLogIn = {this.handleLogIn}
        />}
        {this.state.isLogged &&
        <AppNavlog 
          handleLogOut = {this.handleLogOut}
        />}
        <Switch>
          <Route exact path='/' render={() => (
            <Home
              booklists={this.state.booklists}
              handleSave = {this.handleSave}
              sortType={this.state.sortType}
              listNum={this.state.listNum}
              onSort={this.onSort}
              handleAdd = {this.handleAdd}
            />
          )}/>
          <Route exact path='/news' render={() => (
            <AllNews
              newsLists={this.state.newsLists.newsDetails}
            />)}
          />
          <Route exact path='/booklists' render={() => 
            <BookList
              booklists = {this.state.booklists}
              handleSave = {this.handleSave}
            />
          }/>
          <Route exact path='/booklists/edit/:id' component={BookEdit}/>
          <Route exact path='/booklists/:id' render={() => 
            <MangaDetails
              booklists = {this.state.booklists}
            />}
            />
          <Route exact path="/billboard" render={() => 
            <Billboard
              booklists = {this.state.booklists}
              handleSave = {this.handleSave}
            />
          }/>
          <Route exact path="/billboard/action" render={() => 
            <BillboardAction
              booklists = {this.state.booklists}
              handleSave = {this.handleSave}
            />
          }/>
          <Route exact path="/billboard/comedy" render={() => 
            <BillboardComedy
              booklists = {this.state.booklists}
              handleSave = {this.handleSave}
            />
          }/>
          <Route exact path="/billboard/drama" render={() => 
            <BillboardDrama
              booklists = {this.state.booklists}
              handleSave = {this.handleSave}
            />
          }/>
          <Route exact path="/billboard/mystery" render={() => 
            <BillboardMystery
              booklists = {this.state.booklists}
              handleSave = {this.handleSave}
            />
          }/>
          <Route exact path="/about" render={() => 
            <About
            handleLogIn = {this.handleLogIn}
            />
          }/>
          <Route exact path="/request" render={Request}/>
        </Switch>
        <FooterPage />
      </Router>
    )
  }
}

export default App;