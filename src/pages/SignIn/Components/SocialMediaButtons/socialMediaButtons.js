import React from 'react';
import classes from './socialMediaButtons.module.css'

const SocialMediaButtons = props => {
    return (
        <div className={classes.buttons}>
            <button>  
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/1200px-Facebook_icon_2013.svg.png"/>
                <p>FACEBOOK</p>
                </button> 
                <button>  
                <img src="https://img.icons8.com/color/480/google-logo.png"/>
                <p>GOOGLE</p>
                </button> 
                <button>  
                <img src="https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png"/>
                <p>TWITTER </p>
                </button> 
        </div>
    )
}

export default SocialMediaButtons;