//modules
import React from "react";
import axios from "axios";

//components
import Navbar from "../../components/Navbar/Navbar";
import FooterNav from "../../components/FooterNav/FooterNav";
import RecommendedEssays from "../../components/RecommendedEssays/RecommendedEssays";

//files
import "./UserProfile.scss";
import RecommenedEssays from "../../components/RecommendedEssays/RecommendedEssays";
import RecommendedTopics from "../../components/RecommendedTopics/RecommendedTopics";

class UserProfile extends React.Component {
    state = {
        username: this.props.match.username,
    };

    componentDidMount = () => {
        //axios stuff here
    };

    render() {
        return (
        <div className="user-profile">
            <Navbar />
            <div className="user-profile__user-details">
                <div className="user-profile__profile-pic-container">
                    <img
                        src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt=""
                        className="user-profile__profile-pic"
                    />
                </div>
                <div className="user-profile__user-info">
                    <h1 className="user-profile__subheader">
                        {/* Make this dynamic based on axios call */}
                        {this.state.username !== undefined ? this.state.username : "Aidan Tilgner".toUpperCase()}
                    </h1>
                    <p className="user-profile__description">
                        {/* Make this dynamic based on axios call */}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                        deserunt asperiores sapiente itaque tempore ipsum placeat veniam
                    </p>
                </div>

            </div>
            <RecommenedEssays/>
            <RecommendedTopics/>
            <FooterNav />
        </div>
        );
    }
}

export default UserProfile;
