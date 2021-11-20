import React, {useState, useEffect} from "react";
import {Switch, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import Projects from "./components/project/Projects";
import CreateProject from "./components/project/createProject"
import ViewProject from "./components/project/viewProject";
import EditProject from "./components/project/editProject";

const App = () => {
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        // so this part is where we do the authorization.
        //TODO: look at the flow chart showing the steps of authorization again. I don't actually understand at the moment.
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
        }
    }, []);

    const logOut = () => {
        AuthService.logout();
    };

    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link to={"/"} className="navbar-brand">
                    K12 Citizen Science App
                </Link>

                {currentUser ? (
                    //this can be the user's projects
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={"/profile"} className="nav-link">
                                {currentUser.fname} {currentUser.lname}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/projects"} className="nav-link">
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/createProject"} className="nav-link">
                                Create Project
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="/login" className="nav-link" onClick={logOut}>
                                LogOut
                            </a>
                        </li>
                    </div>
                ) : (
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={"/login"} className="nav-link">
                                Login
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to={"/register"} className="nav-link">
                                Sign Up
                            </Link>
                        </li>
                    </div>
                )}
            </nav>

            <div className="container mt-3">
                <Switch>
                    <Route exact path={["/",]} component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/profile" component={Profile}/>
                    <Route path="/user" component={BoardUser}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/createProject" component={CreateProject}/>
                    <Route path={"/viewProject"} component={ViewProject}/>
                    <Route path={"/editProject"} component={EditProject}/>
                </Switch>
            </div>
        </div>
    );
};

export default App;
