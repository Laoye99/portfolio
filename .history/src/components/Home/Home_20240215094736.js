import React from 'react';
import Typewriter from 'typewriter-effect';


const Home = ({theme, changeTheme}) => {
    return(
        <div className='container-fluid home' id='home'>
        <div  className='theme-change' onClick={chan}></div>
        </div>
    )

};

export default Home;