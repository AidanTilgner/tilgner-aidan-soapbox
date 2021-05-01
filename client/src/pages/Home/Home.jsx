import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';

class Home extends React.Component {

    state={
        recommendedEssays: this.props.recommendedEssays,
        recommendedTopics: this.props.recommendedTopics,
    }

    render(){
        return (
            <div className="home">
                <Navbar active="home"/>
            </div>
        )
    }
}

export default Home
