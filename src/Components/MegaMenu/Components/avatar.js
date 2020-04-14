import React, { Component } from 'react'
import classes from './avatar.module.css';

export default class Avatar extends Component 
{

    constructor(props)
    {
        super(props);
    }
    render() {
        return (
            <div id={this.props.isListItem?classes.list_avatars:""} className={`${classes.avatar} ${this.props.className}`}>
            <img src={this.props.image} alt={this.props.text} />
            <p>{this.props.text}</p>
          </div>
        )
    }
}
