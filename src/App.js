import React from 'react';
import './App.css';
import Login from './pages/login';
import Home from './pages/Home/home';
import AccountDropDown from './Components/Dropdown/dropdown';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  


  render(){
    return (
      <div>
   
      <Home></Home>
      <AccountDropDown/>
      </div>
    
    )
  }
}

export default App;
