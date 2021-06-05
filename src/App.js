import React, { Component } from 'react';
import { connect } from "react-redux";
import { approveRequester, declineRequester } from "./store/employersActions";
import EmployeeForm from "./EmployeeForm";
import Formlist from "./Formlist";
import ApprovalPage from "./ApprovalPage";
import DeclinePage from "./DeclinePage"
import {BrowserRouter as Router,Route,} from "react-router-dom";

import './bootstrap/css/bootstrap.css';
import './App.css';

class App extends Component {

  addNewRequester = newRequester => {
    this.props.approveRequester(newRequester)
  };

  declineRequester = requester_id => {
    this.props.declineRequester(requester_id)
  }

  render() {
    console.log(this.state);
    return (
      <Router>
        <Route path="/" exact component={Formlist} declineRequester={this.declineRequester}
        // key={item.id}
        // id={item.id}
        />
        <Route path="/EmployeeForm" exact component={EmployeeForm} />
        <Route path="/ApprovalPage/:id" exact component={ApprovalPage} />
        <Route path="/DeclinePage/:id" exact component={DeclinePage} />      
      </Router>
    )
  }
}

const mapStateToProps = (state) => ({
  requesters: state.requesters
})

const madDispatchToProps = {
  approveRequester: approveRequester,
  declineRequester: declineRequester
}

export default connect(mapStateToProps, madDispatchToProps)(App);