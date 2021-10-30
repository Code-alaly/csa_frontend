import React from "react";
import AuthService from "../services/auth.service";

const Profile = () => {
    const currentUser = AuthService.getCurrentUser();
    console.log('wows')

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>
                    <strong>Hello {currentUser.fname} {currentUser.lname}</strong> Profile
                </h3>
            </header>
            <p>
                <strong>Id:</strong> {currentUser.id}
            </p>
            <p>
                <strong>Email:</strong> {currentUser.email}
            </p>
        </div>
    );
};

export default Profile;
