import React from 'react';
import Typewriter from 'typewriter-effect';
import { BsFillMoonStarsFill } from 'react-icons/bs';


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
                <B
                </p>
            )}
        </div>
        </div>
    )

};

export default Home;