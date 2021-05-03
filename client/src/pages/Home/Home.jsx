//modules
import React from 'react';

//components
import Navbar from '../../components/Navbar/Navbar';
import RecommendedEssays from '../../components/RecommendedEssays/RecommendedEssays';
import RecommendedTopics from '../../components/RecommendedTopics/RecommendedTopics';
import FooterNav from '../../components/FooterNav/FooterNav';

//files
import './Home.scss'

class Home extends React.Component {

    render(){
        return (
            <div className="home">
                <Navbar active="home"/>
                <RecommendedEssays/>
                <RecommendedTopics/>
                <FooterNav active="home"/>
            </div>
        )
    }
}

export default Home
