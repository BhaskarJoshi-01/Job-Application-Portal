import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import UsersList from './components/Users/UsersList'
import Home from './components/Common/Home'
import Login from './components/Common/Login'
import Register from './components/Common/Register'
import Navbar from './components/templates/Navbar'
import RecruiterProfile from './components/Recruiter/profile'
import JobApplicantProfile from './components/JobApplicant/profile'

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <br/>
        <Route path="/" exact component={Home}/>
        <Route path="/users" exact component={UsersList}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/profile/recruiter/:id" name="profileid" component={RecruiterProfile} />
        <Route path="/profile/applicant/:id" name="profileid" component={JobApplicantProfile} />

      </div>
    </Router>
  );
}

export default App;
