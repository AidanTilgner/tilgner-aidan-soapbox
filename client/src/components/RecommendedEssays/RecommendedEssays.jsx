//modules
import React from 'react';
import axios from 'axios';

//components
import EssayPreview from '../EssayPreview/EssayPreview';

//files
import './RecommendedEssays.scss'

//axios stuff
const API_PORT = 8080;
const API_URL = `http://localhost:${API_PORT}`;

class RecommenedEssays extends React.Component {
    
    state={
        recommendedEssays: []
    }

    componentDidMount = () => {
        axios.get(API_URL + '/essays')
        .then(res => {
            this.setState({
                recommendedEssays: res.data,
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        return (
            <div className="recommended-essays">
                <h1 className="recommended-essays__title">ESSAYS</h1>
                {this.state.recommendedEssays.map(essay => {
                        return(
                            <EssayPreview
                                essayType={essay.essayType}
                                content={essay.content}
                                thesis={essay.thesis}
                                title={essay.title}
                                channel={essay.username}
                                karma={essay.karma}
                                id={essay.id}
                            />
                        )
                    })}
            </div>
        )
    }
}

export default RecommenedEssays
