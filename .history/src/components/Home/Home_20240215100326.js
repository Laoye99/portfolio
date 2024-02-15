import React from 'react';
import Typewriter from 'typewriter-effect';
import { BsFillMoonStarsFill, BsSun } from 'react-icons/bs';
import { Fade } from 'react-awesome-reveal';
import concept from "../../Image/concept.png";



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
        Hello <img alt='vector' src={concept}/>, I'm Opeyemi        
        </h1>

        <h2>
        <Typewriter
        options={{
            strings: [
              "Frontend Developer",
              "Backend Developer",
              "Software Engineer",
            ],
            autoStart: true,
            loop: true,
            delay: 5,
          }}
        />
        </h2>
        </Fade>

        <Fade bottom>
        <div className='button-for-action'>
        <div className='hire-me-button'></div>
        </div>
        </Fade>
        </div>
        </div>
    )

};

export default Home;