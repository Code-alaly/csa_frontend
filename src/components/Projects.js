import React, {useState, useEffect} from "react";
import AuthService from "../services/auth.service";
import authHeader from "../services/auth-header";
import getProjects from "../services/auth.project"


const Projects = () => {
    //this will now just be static

    const [content, setContent] = useState("");

    useEffect(() => {
        getProjects.then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setContent(_content);
            }
        );
    }, []);

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>{content}</h3>
            </header>
        </div>
    );
};

export default Projects;