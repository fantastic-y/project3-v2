import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import FacebookLog from './FacebookLog';

class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      email:'',
      password:'',
      error:'',
      mode: "login"
    }
  }

  setMode = mode => {
    this.setState({
      mode
    });
  };

  renderForgot = () => {
    return(
      <div>
        <p>inside of forgot! :) Will build in phase 2. </p>
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            this.setMode("login");
          }}
        >
          Back to login
        </a>
      </div>
    );
  };

  renderRegister = () => {
    return (
      <div>
        <div>
          <form onSubmit={this.regonSubmit}>
            <div className="form-group">
              <label className="col-sm-5">Username</label>
              <input type="text" className="form-control" value={this.state.username} onChange={this.regonChangeName} required />
            </div>
            <div className="form-group">
              <label className="col-sm-5">Email</label>
              <input type="email" className="form-control" value={this.state.email} onChange={this.regonChangeEmail} required />
            </div>
            <div className="form-group">
              <label className="col-sm-5">Password</label>
              <input type="password" className="form-control" value={this.state.password} onChange={this.regonChangePassword} required />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Register</button>
          </form>
        </div>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            this.setMode("login");
          }}
        >
          Already have an account? Log in here.
        </a>
      </div>
    )
  }

  renderLogin = (props) => {
    return (
      <div>
        <div>
          <form onSubmit={this.loginonSubmit}>
            <p className="error">
              {this.state.error}
            </p>
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="form-control" value={this.state.username} onChange={this.loginonChangeName} required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" value={this.state.password} onChange={this.loginonChangePassword} required />
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  this.setMode("forgot");
                }}
              >
                Forgot Password
              </a>
            </div>
            <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick = {()=> props.handleLogIn()}
            >Login</button>
          </form>
        </div>
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            this.setMode("register");
          }}
        >
         Don't have an account? Register here.
        </a>
      </div>
    )
  }

  loginonChangeName = (e) =>{
    this.setState({username:e.target.value})
  }

  loginonChangeEmail = (e) =>{
    this.setState({email:e.target.value})
  }

  loginonSubmit = (e) =>{
    let { history } = this.props
    e.preventDefault()
    let olddata = localStorage.getItem('formdata')
    let oldArr = JSON.parse(olddata)
    oldArr.map(arr => 
      {
        if(this.state.username.length > 0 && this.state.password.length > 0){
          if (arr.username === this.state.username && (arr.password === this.state.password)) {
            let user = this.state.username;
            history.push({ pathname: "/AppNavlog", user: this.state.username });
            history.push({ pathname: "/App", user: this.state.username });
            console.log(user);
          }else{
            this.setState({error:'Please check your email or password'})
          }
        }
      }
      )
  }
  
  loginonChangePassword = (e) =>{
    this.setState({password:e.target.value})
  }

  regonChangeName = (e) =>{
    this.setState({username:e.target.value})
  }

  regonChangeEmail = (e) =>{
    this.setState({email:e.target.value})
  }

  regonChangePassword = (e) =>{
    this.setState({password:e.target.value})
  }

  regonSubmit = (e) =>{
    let ob = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    }
    let olddata = localStorage.getItem('formdata');
    if(olddata==null){
      olddata = []
      olddata.push(ob)
      localStorage.setItem('formdata', JSON.stringify(olddata));
    }else{
      let oldArr = JSON.parse(olddata)
      oldArr.push(ob)
      localStorage.setItem("formdata", JSON.stringify(oldArr))
      console.log(oldArr,'hhg')
    }
    alert("Successfully registered!");
  }

  render() {
    return (
      <div>
         <Modal
            show={this.props.isOpen}
            onHide={this.props.toggle}
            onSubmit={this.props.handleLogIn}
          >
            <Modal.Header closeButton={true}>
              <h2>{ this.state.mode === "login" ? "Login" : this.state.mode === "register" ? "Register" : "Forgot Password" }</h2>
            </Modal.Header>
            <Modal.Body>
              {this.state.mode === "login" ? (this.renderLogin()) : this.state.mode === "register" ? (this.renderRegister()) : (this.renderForgot())}
            </Modal.Body>
            <Modal.Footer>
            <FacebookLog />
              <Button variant ="secondary" onClick={this.props.toggle}>Close</Button>
            </Modal.Footer>
          </Modal>
      </div>
    )
  }
}

export default LoginForm;