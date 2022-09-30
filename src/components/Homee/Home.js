import React, { Fragment } from "react";
import playButton from '../../image/play.png'
import classes from './Home.module.css'

const Home = () => {
    return (
        <Fragment>
            <header className={classes.divheader}>
                <button className={classes.button1}> Get Out Lastest Album</button>
                <img className={classes.img} src = {playButton} alt= "Play Button"></img>
            </header>

            <h2 className={classes.h2}> Tours </h2>

          <div className={classes.div}>
            <div className={classes.tour}>
                <span className={classes.date}>JUL 16</span>
                <span className={classes.place}>DETROIT, MI</span>
                <span className={classes.event}>DTE ENERGY MUSIC THEATRE</span>
                <button className={classes.button}>Buy tickets</button>
            </div>
            <div className={classes.tour}>
                <span className={classes.date}>JUL 16</span>
                <span className={classes.place}>DETROIT, MI</span>
                <span className={classes.event}>DTE ENERGY MUSIC THEATRE</span>
                <button className={classes.button}>Buy tickets</button>
            </div>
            <div className={classes.tour}>
                <span className={classes.date}>JUL 16</span>
                <span className={classes.place}>DETROIT, MI</span>
                <span className={classes.event}>DTE ENERGY MUSIC THEATRE</span>
                <button className={classes.button}>Buy tickets</button>
            </div>
            <div className={classes.tour}>
                <span className={classes.date}>JUL 16</span>
                <span className={classes.place}>DETROIT, MI</span>
                <span className={classes.event}>DTE ENERGY MUSIC THEATRE</span>
                <button className={classes.button}>Buy tickets</button>
            </div>
            <div className={classes.tour}>
                <span className={classes.date}>JUL 16</span>
                <span className={classes.place}>DETROIT, MI</span>
                <span className={classes.event}>DTE ENERGY MUSIC THEATRE</span>
                <button className={classes.button}>Buy tickets</button>
            </div>


          </div>
        </Fragment>
    )
    
}

export default Home;