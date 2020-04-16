import React from 'react'
import styles from  './search.module.css'

class SearchBar extends React.Component{
  
  constructor(props)
  {
      super(props);
      this.state={
          isEmpty:true,
          text:""
      }
  }
  
    render(){

        const OnChange=(text)=>
        {
           
            
            this.setState({isEmpty:text.target.value.length===0,text:text.target.value});
           
        };
        return (<div className={this.props.className}>
                    <div className={!this.state.isEmpty?styles.backdrop:""}></div>
                     <input value={this.state.text} onChange={OnChange} id="search" placeholder="Search for items,brands and inspiration" className={styles.search_input}/>
                     <i className={`fas fa-search ${styles.icon} ${!this.state.isEmpty?styles.active:""}`}></i>
                     {!this.state.isEmpty && <i onClick={()=>this.setState({text:"",isEmpty:true})} className={`fas fa-times ${styles.close_icon}`}></i>}
              </div>)
    }
}


export default SearchBar;