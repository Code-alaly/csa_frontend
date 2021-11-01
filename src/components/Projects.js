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
                        <li
                            className={
                                "list-group-item "
                            }
                            key={index}
                        >
                            {c._id} is this thing on?
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )

};

export default Projects;