import React, { Component } from 'react';
import styles from './landingPage.module.css'
import {RaisedButton, LinkRaisedButton} from '../../Components/buttons';
import sample from '../../assets/People4.mp4'

import axios from 'axios';

export default class LandingPage extends Component {

    componentDidMount()
    {
   //   var Products= axios.get('https://simplescraper.io/api/6c6Sziukbi4h7AgW7Gd7?apikey=Ui0mBkg76NeBDR9NUG04cz5X5SuVms5H&limit=20');

   //   Products.then(res=>console.log(res));
      
    }

    render() {
        
        return (
            <div className={`${styles.main} col`}>
                <video className={styles.video} autoPlay loop muted>
                  <source src={sample} type='video/mp4' />
                </video>
                <h1 className={styles.title}>This is Asos</h1>
                <p className={styles.subTitle}>ASOS DESIGN and 850+ brands</p>
                <div className={`${styles.buttons} row`}>
                    <LinkRaisedButton Link="/man" color="invert">MEN</LinkRaisedButton>
                    <RaisedButton color="invert">WOMEN</RaisedButton>
                </div>
            </div>
        )
    }
}
