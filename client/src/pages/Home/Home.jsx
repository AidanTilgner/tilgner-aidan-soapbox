import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

function Home(props) {
    let screenSize = window.screen.width;
    return (
        <div className="home">
            <Navbar active="home" screenSize={screenSize}/>
        </div>
    )
}

export default Home
