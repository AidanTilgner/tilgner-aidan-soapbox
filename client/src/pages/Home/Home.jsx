//modules
import React from 'react';

//components
import Navbar from '../../components/Navbar/Navbar';
import EssayPreview from '../../components/EssayPreview/EssayPreview';
import RecommendedEssays from '../../components/RecommendedEssays/RecommendedEssays';
import FooterNav from '../../components/FooterNav/FooterNav';

//files
import './Home.scss'

class Home extends React.Component {

    render(){
        return (
            <div className="home">
                <Navbar active="home"/>
                <RecommendedEssays/>
                <FooterNav active="home"/>
            </div>
        )
    }
}

export default Home
