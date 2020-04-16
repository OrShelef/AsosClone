import React from 'react';
import './App.css';
import Login from './pages/login';
import Home from './pages/Home/home';
import AccountDropDown from './Components/Dropdown/dropdown';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  


  render(){
    return (
      <Router>
   
      <Home></Home>
      <AccountDropDown/>
      </Router>
    
    )
  }
}

export default App;
