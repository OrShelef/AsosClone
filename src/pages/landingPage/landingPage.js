import React, { Component } from 'react';
import styles from './landingPage.module.css'
import {RaisedButton} from '../../Components/buttons';
import sample from '../../assets/People4.mp4'
export default class LandingPage extends Component {

    render() {
        return (
            <div className={`${styles.main} col`}>
                <video className={styles.video} autoPlay loop muted>
                  <source src={sample} type='video/mp4' />
                </video>
                <h1 className={styles.title}>This is Asos</h1>
                <p className={styles.subTitle}>ASOS DESIGN and 850+ brands</p>
                <div className={`${styles.buttons} row`}>
                    <RaisedButton color="invert">MEN</RaisedButton>
                    <RaisedButton color="invert">WOMEN</RaisedButton>
                </div>
            </div>
        )
    }
}
