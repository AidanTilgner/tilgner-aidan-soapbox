//modules
import React from 'react';

//components
import Navbar from '../../components/Navbar/Navbar';
import EssayPreview from '../../components/EssayPreview/EssayPreview';
import FooterNav from '../../components/FooterNav/FooterNav';

//files
import './Home.scss'

class Home extends React.Component {

    render(){
        return (
            <div className="home">
                <Navbar active="home"/>
                <h1 className="home__title">VIDEOS</h1>
                {this.props.recommendedEssays.map(essay => {
                    return(
                        <EssayPreview
                            essayType={essay.essayType}
                            content={essay.content}
                            thesis={essay.thesis}
                            title={essay.title}
                            channel={essay.username}
                            karma={essay.karma}
                        />
                    )
                })}
                <FooterNav active="home"/>
            </div>
        )
    }
}

export default Home
