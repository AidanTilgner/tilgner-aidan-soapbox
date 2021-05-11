//modules
import React from 'react';
import { Link } from 'react-router-dom';

//files
import './EssayPreview.scss';

function EssayPreview({essayType, content, thesis, title, channel, karma, id}) {
    return (
        <Link to={`/essay/${id}`} className="essay-preview">
            {essayType === 'document' &&
            <>
                <div className="essay-preview__thesis">
                    {thesis}
                </div>
                <p className="essay-preview__karma">Karma: {karma}</p>
                <p className="essay-preview__channel">{channel}</p>
            </>
            }
            
        </Link>
    )
}

export default EssayPreview
