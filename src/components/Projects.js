import React, {useState, useEffect} from "react";
import AuthService from "../services/auth.service";
import authHeader from "../services/auth-header";
import Project from "../services/auth.project"
import projectTile from "./ProjectTile";
import data from "bootstrap/js/src/dom/data";


const Projects = () => {
    //this will now just be static

    const [content, setContent] = useState("");

    useEffect(() => {
        Project.getProjects().then(
            (response) => {
                setContent(response.data)
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
        <div>
            <div className="container">
                <ul className="list-group">
                    {Array.isArray(content)?
                        content.map((c, index) => (
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Project Name: {c.projectName}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Project Code: {c.projectCode}</h6>
                                    <p className="card-text">'project subject'</p>
                                    <a href="#" className="card-link">Card link</a>
                                    <a href="#" className="card-link">Another link</a>
                                </div>
                            </div>
                        )) : <div className="container">
                            <header className="jumbotron">
                                <h3>{content}</h3>
                            </header>
                        </div>}
                </ul>
            </div>

        </div>
    )

};

export default Projects;