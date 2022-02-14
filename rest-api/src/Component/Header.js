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
                        <nav class="navbar navbar-dark bg-dark">
                         
                            <a className="navbar-brand" href="#">Movies Collection</a>
                          
                        </nav>
                    </header>
                    <Route exact path="/" component={MovieApiCall}></Route>
                </div>
            </BrowserRouter>
        </div>
    )
}
export default Header;