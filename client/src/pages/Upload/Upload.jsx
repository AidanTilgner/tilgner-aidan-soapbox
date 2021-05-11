//modules
import React from 'react';
import axios from 'axios';

//components
import Navbar from '../../components/Navbar/Navbar';
import FooterNav from '../../components/FooterNav/FooterNav';

//files
import './Upload.scss'

//axios stuff
const API_PORT = 8080;
const API_URL = `http://localhost:${API_PORT}`;

class Upload extends React.Component {

    state={
        isDocument: true
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    checkForm = (e) => {
        let inputs = Array.from(document.querySelectorAll('input')).filter(el => el.id !== 'search');
        inputs.push(...Array.from(document.querySelectorAll('textarea')));

        let complete = true;

        inputs.forEach(input => {
            if(input.value === null || input.value === ''){
                complete = false;
                input.style.border = '2px solid #B03C09';
                console.log('failure' + input)
            } else{
                input.style.border = '2px solid #C4C4C4';
            }
        })

        if(complete === true){
            this.setState({
                formComplete: true,
            })
        }else if(complete === false){
            this.setState({
                formComplete: false,
            })
        }
        
        return complete;
    }

    handleSubmit = (e) => {
        if(this.checkForm()){
            if(this.state.isDocument){
                axios.post(`${API_URL}/essays`, {
                    essayType: "document",
                    thesis: this.state.thesis,
                    title: this.state.title,
                    content: this.state.content,
                    username: "Aidan Tilgner",
                    synopsis: this.state.synopsis,
                    reviews: [
                        { "username": "Your mom", "rating": 100, "content": "Great job hun!" }
                    ]
                })
            }else{

            }

            this.props.history.push('/user/Soapbox')
        }
    }

    render(){
        return(
            <div className="upload">
                <Navbar active='upload'/>
                <h1 className="upload__title">New Essay</h1>
                <form 
                    className="upload__form"
                    onSubmit={e => {
                        e.preventDefault();
                        this.handleSubmit();
                    }}
                >
                    <div className="upload__essay-type">
                        <label className="upload__label upload__label--form-section">Essay Type</label>
                        <button
                            className="upload__button upload__button--essay-type"
                            onClick={(e) => {
                                e.preventDefault();
                                this.setState({
                                    isDocument: !this.state.isDocument
                                })
                            }}
                        >
                            {
                                this.state.isDocument ?
                                'Document' : 'Video'
                            }
                        </button>
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
                            onChange={e => this.handleChange(e)}
                            onBlur={e => {

                            }}
                        />
                        <label htmlFor="synopsis" className="upload__label">Synopsis</label>
                        <textarea 
                            name="synopsis" 
                            id="synopsis" 
                            placeholder="Synopsis"
                            className="upload__textarea"
                            onChange={e => this.handleChange(e)}
                        />
                        <label htmlFor="title" className="upload__label">Title</label>
                        <input 
                            type="text" 
                            name="title" 
                            id="title"
                            placeholder="Title"
                            className="upload__input"
                            onChange={e => this.handleChange(e)}
                        />
                        <label 
                            htmlFor={`${this.state.essayType === 'document' ? 'content' : 'file'}`}
                            className="upload__label"
                        >
                            {this.state.isDocument ? 'Content' : 'File'}
                        </label>
                        {
                            this.state.isDocument && 
                            <textarea 
                                name="content"
                                placeholder="Content"
                                id="content"    
                                className="upload__textarea"
                                onChange={e => this.handleChange(e)}
                            />
                        }
                        {
                            !this.state.isDocument &&
                            <label className="upload__input-file-cover">
                                Choose File
                                <input 
                                    type='file'
                                    name='file'
                                    placeholder='File'
                                    className="upload__input upload__input--file"
                                    onChange={e => this.handleChange(e)}
                                />
                            </label>
                        }
                    </div>
                    {
                        this.state.formComplete == false &&
                        <p className="upload__warning">* please fill out required fields</p>
                    }
                    <div className="upload__buttons">
                        <button
                            className="upload__button upload__button--cancel"
                            onClick={(e) => {
                                e.preventDefault();
                                this.props.history.goBack();
                            }}
                        >
                            Cancel
                        </button>
                        <button 
                            className="upload__button upload__button--submit"
                            type="submit"
                        >
                            Upload
                        </button>
                    </div>
                </form>
                <FooterNav active='upload'/>
            </div>
        )
    }
}

export default Upload
