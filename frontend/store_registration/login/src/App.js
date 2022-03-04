import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './component/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './component/Footer'
import Log from './pages/Log';
import userList from "./component/admin/UserList"
import adduser from "./component/admin/AddUser"

function App() {
    return (
        <div className="App">
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/Login" exact component={Login} />
                    <Route path="/Signup" exact component={Register} />
                    <Route path='/log' exact component={Log} />
                    <Route exact path="/api/admin" component={userList} />
            <Route path="/admin/add" component={adduser} />
            <Route path="/users/edit/:id" component={adduser} />
           
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;