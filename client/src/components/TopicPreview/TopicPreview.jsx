//modules
import React from 'react';

//files
import './TopicPreview.scss'

function TopicPreview({topic, thumbnail}) {
    return (
        <div className="topic-preview">
            <h2 className="topic-preview__title">{topic}</h2>
            <img src={thumbnail} alt="" className="topic-preview__thumbnail"/>
        </div>
    )
}

export default TopicPreview
