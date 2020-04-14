
import React, { Component } from 'react'
import classes from './thumbnail.module.css';

export default class Thumbnail extends Component 
{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className={`${classes.thumbnail} ${this.props.className}`}>
              <img src={this.props.image}/>
              <p>{this.props.children}</p>
            </div>
        )
    }
}
