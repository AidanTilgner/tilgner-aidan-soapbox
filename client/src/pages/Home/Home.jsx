//modules
import React from 'react';

//components
import Navbar from '../../components/Navbar/Navbar';
import RecommendedEssays from '../../components/RecommendedEssays/RecommendedEssays';
import RecommendedTopics from '../../components/RecommendedTopics/RecommendedTopics';
import UploadButton from '../../components/UploadButton/UploadButton';
import FooterNav from '../../components/FooterNav/FooterNav';

//files
import './Home.scss'

function Home (props) {
    return (
        <div className="home">
            <Navbar active="home" username={props.username}/>
            <RecommendedEssays/>
            <RecommendedTopics/>
            <UploadButton/>
            <FooterNav active="home" username={props.username}/>
        </div>
    )
}

export default Home
