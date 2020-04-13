import React, { Component } from 'react'
import './home.css';
import Navbar from '../../Components/Navbar/navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import LandingPage from '../landingPage/landingPage';
export default class Home extends Component 
{


    render() {
        return (
           
              
            <Router>
                <Navbar/>
                    <Switch>
                        <Route path="/">
                            <LandingPage/>
                        </Route>
                    </Switch>
                </Router>
            
        )
    }
}
