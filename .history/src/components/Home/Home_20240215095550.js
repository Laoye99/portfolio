import React from 'react';
import Typewriter from 'typewriter-effect';
import { BsFillMoonStarsFill, BsSun } from 'react-icons/bs';
import { Fade } from 'react-awesome-reveal';


const Home = ({theme, changeTheme}) => {
    return(
        <div className='container-fluid home' id='home'>
        <div  className='theme-change' onClick={changeTheme}>
        {theme === "light" ? (
            <p>
            <BsFillMoonStarsFill />{" "}
            </p>
            ) : (
                <p className='sun-light-icon'>
                <BsSun/>
                </p>
            )}
        </div>

        <div className='container home-content'>
        <Fade right>
        <h1>
        Hello <img alt='vector' src={love}/>, I'm Opeyemi        
        </h1>
        </Fade>
        </div>
        </div>
    )

};

export default Home;