//modules
import React from 'react';
import axios from 'axios';

//components
import Navbar from '../../components/Navbar/Navbar';
import FooterNav from '../../components/FooterNav/FooterNav';

//files
import './Upload.scss'

class Upload extends React.Component {

    state={
        essayType: 'document',
    }

    render(){
        return(
            <div className="upload">
                <Navbar active='upload'/>
                <h1 className="upload__title">New Essay</h1>
                <form className="upload__form">
                    <div className="upload__essay-type">
                        <label htmlFor="essay-type" className="upload__label upload__label--form-section">Essay Type</label>
                        <input 
                            type="radio" 
                            name="essay-type" 
                            id="document" 
                            className="upload__radio"
                        />
                        <label htmlFor="essay-type" className="upload__label upload__label--radio">Document</label>
                        <input 
                            type="radio" 
                            name="essay-type" 
                            id="video" 
                            className="upload__radio"
                        />
                        <label htmlFor="essay-type" className="upload__label upload__label--radio">Video</label>
                    </div>
                    <div className="upload__essay-details">
                        <p className="upload__label upload__label--form-section">Essay Details</p>
                        <label htmlFor="thesis" className="upload__label">Thesis</label>
                        <input 
                            type="text" 
                            name="thesis" 
                            id="thesis"
                            placeholder="Thesis"
                            className="upload__input"
                        />
                        <label htmlFor="synopsis" className="upload__label">Synopsis</label>
                        <textarea 
                            name="synopsis" 
                            id="synopsis" 
                            placeholder="Synopsis"
                            className="upload__textarea"
                        />
                        <label htmlFor="title" className="upload__label">Title</label>
                        <input 
                            type="text" 
                            name="title" 
                            id="title"
                            placeholder="Title"
                            className="upload__input"
                        />
                        <label 
                            htmlFor={`${this.state.essayType === 'document' ? 'content' : 'file'}`}
                            className="upload__label"
                        >
                            {this.state.essayType === 'document' ? 'Content' : 'File'}
                        </label>
                        {
                            this.state.essayType === 'document' && 
                            <textarea 
                                name="content"
                                placeholder="Content"
                                id="content"    
                                className="upload__textarea"
                            />
                        }
                        {
                            this.state.essayType === 'video' &&
                            <input 
                                type='file'
                                name='file'
                                placeholder='File'
                                className="upload__input upload__input--file"
                            />
                        }
                    </div>
                </form>
                <FooterNav active='upload'/>
            </div>
        )
    }
}

export default Upload
