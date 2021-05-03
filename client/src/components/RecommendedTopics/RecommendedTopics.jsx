//modules
import React from 'react';
import axios from 'axios';

//components
import TopicPreview from '../TopicPreview/TopicPreview';

//files
import './RecommendedTopics.scss';

//axios stuff
const API_PORT = 8080;
const API_URL = `http://localhost:${API_PORT}`;

class RecommendedTopics extends React.Component {
    
    state={
        recommendedTopics: []
    }

    componentDidMount = () => {
        axios.get(API_URL + '/topics')
        .then(res => {
        this.setState({
            recommendedTopics: res.data,
        })
        })
        .catch(err => {
        console.log(err)
        })
    }

    render(){
        return (
            <div className="recommended-topics">
                <h1 className="recommended-topics__title">TOPICS</h1>
                {this.state.recommendedTopics.map(topic => {
                    return(
                        <TopicPreview
                            topic={topic.topic}
                            thumbnail={topic.thumbnail}
                        />
                    )
                })}
            </div>
        )
    }
}

export default RecommendedTopics
