//modules
import React from 'react';
import axios from 'axios';

//components
import Navbar from '../../components/Navbar/Navbar';
import FooterNav from '../../components/FooterNav/FooterNav';

//files
import './EssayView.scss';

//axios stuff
const API_PORT = 8080;
const API_URL = `http://localhost:${API_PORT}`;

class EssayView extends React.Component {

    state={
        id: this.props.match.params.id,
        essayType: null,
        thesis: null,
        title: null,
        content: null,
        username: null,
        synopsis: null,
        karma: null,
        reviews: [
            {
                username: null,
                rating: null,
                content: null
            }
        ],
        voted: false
    }

    componentDidMount = () => {
        axios.get(`${API_URL}/essays/${this.state.id}`)
        .then(res => {
            let essay = res.data;
            this.setState({
                essayType: essay.essayType,
                thesis: essay.thesis,
                title: essay.title,
                content: essay.content,
                username: essay.username,
                synopsis: essay.synopsis,
                karma: essay.karma,
                reviews: essay.reviews
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    handleDownvote = (e) => {
        if(!this.state.voted){
            this.setState({
                voted: true,
                karma: this.state.karma - 1
            })
            axios.put(`${API_URL}/essays/${this.state.id}/karma`, {
                karma: -1
            })
            e.target.style.color = '#C4C4C4';
        } else{
            this.setState({
                voted: false,
                karma: this.state.karma + 1
            })
            axios.put(`${API_URL}/essays/${this.state.id}/karma`, {
                karma: 1
            })
            e.target.style.color = '#2B2930';
        }
    }

    handleUpvote = (e) => {
        if(!this.state.voted){
            this.setState({
                voted: true,
                karma: this.state.karma + 1
            })
            axios.put(`${API_URL}/essays/${this.state.id}/karma`, {
                karma: 1
            })
            e.target.style.color = '#C4C4C4';
        } else{
            this.setState({
                voted: false,
                karma: this.state.karma - 1
            })
            axios.put(`${API_URL}/essays/${this.state.id}/karma`, {
                karma: -1
            })
            e.target.style.color = '#2B2930';
        }
    }

    render(){
        return (
            <div className="essay-view">
                <Navbar/>
                <div className="essay-view__content-container">
                    <p className="essay-view__content">
                        {this.state.content}
                    </p>
                </div>
                <div className="essay-view__info">
                    <h2 className="essay-view__thesis">
                        {this.state.thesis}
                    </h2>
                    <h3 className="essay-view__title">
                        {this.state.title}
                    </h3>
                    <h3 className="essay-view__channel">
                        {this.state.username}
                    </h3>
                    <p className="essay-view__description">
                        {this.state.synopsis}
                    </p>
                    <p className="essay-view__karma">
                        <span onClick={e => this.handleDownvote(e)} className="essay-view__karma--icon">-</span>
                        {this.state.karma}
                        <span onClick={e => this.handleUpvote(e)} className="essay-view__karma--icon">+</span>
                    </p>
                </div>
                <div className="essay-view__reviews">
                    {   this.state.reviews &&
                        this.state.reviews.map(review => {
                            <div className="essay-view__review">
                                <p className="essay-view__review-author">
                                    {review.username}
                                </p>
                                <p className="essay-view__review__rating">
                                    {review.rating}
                                </p>
                                <p className="essay-view__review-content">
                                    {review.content}
                                </p>
                            </div>
                        })
                    }
                </div>
                <FooterNav/>
            </div>
        )
    }
}

export default EssayView;