import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

//going to probably just... take this whole thing out? I'm not sure yet.

const Home = () => {
    //this will now just be static

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>Welcome to the Citizen Science App!</h3>
            </header>
        </div>
    );
};

export default Home;
