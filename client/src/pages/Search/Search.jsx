//modules
import React from 'react';

//components
import Navbar from '../../components/Navbar/Navbar';
import UploadButton from '../../components/UploadButton/UploadButton';
import FooterNav from '../../components/FooterNav/FooterNav';
import EssayPreview from '../../components/EssayPreview/EssayPreview';

//files
import './Search.scss';
import axios from 'axios';

//axios stuff
const API_PORT = 8080;
const API_URL = `http://localhost:${API_PORT}`;

class Search extends React.Component {

    state={
        essays: [],
    }

    componentDidMount = () => {
        axios.get(`${API_URL}/essays/search/${this.props.match.params.query}`)
        .then(res => {
            this.setState({
                essays: res.data
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    render(){
        console.log(this.state)
        return (
            <div className="search">
                <Navbar/>
                <h1 className="search__subtitle">
                    HERE'S WHAT WE FOUND...
                </h1>
                <div className="search__essays">
                    {
                        this.state.essays.map(essay => {
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
                        })
                    }
                </div>
                <UploadButton/>
                <FooterNav/>
            </div>
        )
    }
}

export default Search
