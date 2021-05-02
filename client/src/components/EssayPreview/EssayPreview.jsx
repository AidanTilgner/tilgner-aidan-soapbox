import React from 'react'

function EssayPreview({essayType, content, thesis, title, channel, karma}) {
    return (
        <div className="essay-preview">
            <p>{essayType}</p>
            <p>{content}</p>
            <p>{thesis}</p>
            <p>{title}</p>
            <p>{channel}</p>
            <p>{karma}</p>
        </div>
    )
}

export default EssayPreview
