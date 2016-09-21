import React from 'react';
// var debounce = require('throttle-debounce/throttle');

import './style.css';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import TextInput from 'components/TextInput'
import Button from 'components/Button'
import Form from 'components/Form'
import {fnlogin} from 'api';
import {push} from 'react-router-redux';
import {saveStateWithKey} from '../../Localstorage';

export default class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function

TextInput_Change = (event) => {

     var change = {};
     change[event.target.name] = event.target.value.trim();
     this.setState(change);
     console.log(this.state);

}
openRoute = (route) => {
  this.props.changeRoute(route);
};

Check_Login=(event)=> {
  event.preventDefault();
 const that=this;
  fnlogin(this.state.email,this.state.password)
  .then(function (response) {
    console.log(response);
    if(response.data.message=="login success"){
      saveStateWithKey("apikey",{apikey:response.data.data});
      that.props.changeRoute('/');
    }
    else{
      that.setState({error:'Invalid Username or password'});
    }
  })
  .catch(function (error) {
    console.log(error);
  });

}

constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',
      error:''
    }
  }
  render() {
console.log(this.state);
    return (

            <div className="container-fluid">
              <div className="row" data-plugin="matchHeight" data-by-row="true">
                <div className="col-md-4 col-xs-offset-4">
                <div className="inner-box CompletedForms login-box">
                  <div className="box-heading">
                      <h1>
                            <span className="EventTitle">Login</span>
                        </h1>
                    </div>
                    <div className="box-content">
                      <div className="ActivityOverviewForm">
                          <Form handleSubmit={this.Check_Login}>
                              <div className="form-columb">
                                  <div className="form-row" >
                                      <label>Email</label>
                                        <TextInput onChange={this.TextInput_Change} required="true"  type="text" name="email" placeholder="johnsmith@gmail.com" />
                                    </div>
                                    <div className="form-row">
                                      <label>Password</label>
                                      <TextInput onChange={this.TextInput_Change} required="true" type={"password"}  name={"password"} placeholder={"********"}/>
                                    </div>
                                    <div className={this.state.error?"form-row-error":'hidden'}>
                                    {this.state.error}
                                    </div>
                                    <div className="form-row">
                                      <Button className="login-btn" type="submit" >
                                          Login
                                      </Button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                 </div>
                </div>
              </div>
            </div>
    );
  }
}
Login.propTypes = {
  changeRoute: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
  };
}


export default connect(null, mapDispatchToProps)(Login);
