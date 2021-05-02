//modules
import React from 'react';

//files
import './EssayPreview.scss';

function EssayPreview({essayType, content, thesis, title, channel, karma}) {
    return (
        <div className="essay-preview">
            {essayType === 'document' &&
            <>
                <div className="essay-preview__content">
                    {content}
                </div>
            </>
            }
            
        </div>
    )
}

export default EssayPreview
