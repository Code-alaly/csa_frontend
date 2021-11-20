import React, {useState, useEffect} from "react";
import authHeader from "../../services/auth-header";
import Project from "../../services/auth.project"
import data from "bootstrap/js/src/dom/data";


const Projects = props => {
    //added props to creation of component

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


    const onDel = (e) => {
        const name = e.target.getAttribute("id")
        Project.deleteProject(name).then((response) => {
            window.location.reload()
        })
    };
    const onGet = (e) => {
        const name = e.target.getAttribute("id")
        const path = e.target.getAttribute("path")
        Project.getProject(name).then((res) => {
            const items = res
            props.history.push({pathname: path, state: res.data});
            window.location.reload();
        })
    }


    return (
        <div>
            <div className="container">
                <ul className="list-group">
                    {Array.isArray(content) ?
                        content.map((c, index) => (
                            <div className="card">
                                <div className="card-body" id={c._id} onClick={onGet} path={'/ViewProject'}>
                                    <h5 className="card-title">Project Name: {c.projectName}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Project Code: {c.projectCode}</h6>
                                    <p className="card-text">Subject: {c.subject}</p>
                                    <button className="card-link" id={c._id} path={'/EditProject'}
                                            onClick={onGet}>Edit
                                    </button>
                                    <button className="card-link" id={c._id}
                                            onClick={onDel}>Delete
                                    </button>
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