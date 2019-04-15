import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails  from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/Signup';
import CreateProject from './components/projects/CreateProject';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/' component={Dashboard}></Route>
            <Route path='/project/:id' component={ProjectDetails}></Route>
            <Route path='/SignIn' component={SignIn}></Route>
            <Route path='/SignUp' component={SignUp}></Route>
            <Route path='/Create' component={CreateProject}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
