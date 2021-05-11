//modules
import React from 'react';

//components
import Navbar from '../../components/Navbar/Navbar';
import RecommendedTopics from '../../components/RecommendedTopics/RecommendedTopics';
import UploadButton from '../../components/UploadButton/UploadButton';
import FooterNav from '../../components/FooterNav/FooterNav';

//files
import './Topics.scss';

function Topics() {
    return (
        <div className="topics">
            <Navbar active="topics"/>
            <RecommendedTopics/>
            <UploadButton/>
            <FooterNav active="topics"/>
        </div>
    )
}

export default Topics
