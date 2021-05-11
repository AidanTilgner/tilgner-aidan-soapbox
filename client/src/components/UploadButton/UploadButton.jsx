//modules
import React from 'react';
import { Link } from 'react-router-dom';

//files
import './UploadButton.scss';

function UploadButton() {
    return (
        <Link to="/upload" className="upload-button">
            <div className="upload-button__line1"></div>
            <div className="upload-button__line2"></div>
        </Link>
    )
}

export default UploadButton
