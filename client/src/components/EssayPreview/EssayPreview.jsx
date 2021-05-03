//modules
import React from 'react';

//files
import './EssayPreview.scss';

function EssayPreview({essayType, content, thesis, title, channel, karma}) {
    return (
        <div className="essay-preview">
            {essayType === 'document' &&
            <>
                <div className="essay-preview__thesis">
                    {thesis}
                </div>
                <p className="essay-preview__karma">Karma: {karma}</p>
                <p className="essay-preview__channel">{channel}</p>
            </>
            }
            
        </div>
    )
}

export default EssayPreview
