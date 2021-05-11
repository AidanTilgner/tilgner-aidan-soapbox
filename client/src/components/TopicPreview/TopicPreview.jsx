//modules
import React from 'react';
import { Link } from 'react-router-dom';

//files
import './TopicPreview.scss'

function TopicPreview({topic, thumbnail, keywords}) {
    return (
        <Link to={`/search/${
            keywords.map(word => {
                return word;
            }).join('+')
            }`} 
            className="topic-preview"
        >
            <h2 className="topic-preview__title">{topic}</h2>
            <img src={thumbnail} alt="" className="topic-preview__thumbnail"/>
        </Link>
    )
}

export default TopicPreview
