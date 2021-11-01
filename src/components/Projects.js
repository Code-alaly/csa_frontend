import React, {useState, useEffect} from "react";
import AuthService from "../services/auth.service";
import authHeader from "../services/auth-header";
import Project from "../services/auth.project"
import projectTile from "../components/ProjectTile";
import data from "bootstrap/js/src/dom/data";


const Projects = () => {
    //this will now just be static

    const [content, setContent] = useState("");
    const [show, setShow] = useState(undefined)

    useEffect(() => {
        Project.getProjects().then(
            (response) => {
                if (!Array.isArray(response.data)) {
                    setShow(response.data);
                } else {
                    setShow(response.data)
                }

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
                    {show &&
                    show.map((c, index) => (
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Project Name: {c.projectName}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Project Code: {c.projectCode}</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                        // <li
                        //     className={
                        //         "list-group-item "
                        //     }
                        //     key={index}
                        // >
                        //     {c._id}
                        //     {c.projectName}
                        //     {c.projectCode}
                        // </li>
                    ))}
                </ul>
            </div>

        </div>
    )

};

export default Projects;