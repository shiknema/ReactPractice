import React from 'react';
import MovieApiCall from './MovieApiCall';
import { BrowserRouter, Route, Link } from 'react-router-dom';
//import Container from 'react-bootstrap/Container';

const Header = () => {

    return (
        <div>
            <BrowserRouter>
                <div>
                    <header>
                        <nav className="navbar navbar-inverse">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <a className="navbar-brand" href="#">Movies</a>
                                </div>
                                <div className="collapse navbar-collapse" id="myNavbar">
                                    <ul className="nav navbar-nav">
                                        <li><Link to="/">Movies</Link></li>

                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </header>
                    <Route exact path="/" component={MovieApiCall}></Route>



                </div>
            </BrowserRouter>
        </div>
    )
}
export default Header;