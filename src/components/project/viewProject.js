import React from "react";

const ViewProject = (e) => {
    console.log(e)

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>
                    <strong>Project Name: {e.projectName}</strong> Profile
                </h3>
            </header>
            <p>
                <strong>Id:</strong> Project Code: e.projectCode
            </p>
            <p>
                <strong>Email:</strong> this is just some stuff
            </p>
        </div>
    );
};

export default ViewProject;