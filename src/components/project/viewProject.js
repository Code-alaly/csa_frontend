import React, {useState, useEffect} from "react";
import Project from "../../services/auth.project";
import Entries from "../../services/auth.students";

const ViewProject = (props) => {
    const projectData = props.location.state

    const [content, setContent] = useState("");

    useEffect(() => {
        Entries.getEntries(projectData.projectCode).then(
            (response) => {

                console.log("STAPHTCH")
                //TODO: this is succesfully working, we'll just want it to be actually populating correctly with student entries and what have you
                setContent(response.data.teacherExample)
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
        //TODO: I think in here I'll put all of the entries, along with the graph and what not.

        <div className="container">
            <header className="jumbotron">
                <h3>
                    <strong>Project Name: {projectData.projectName}</strong>
                </h3>
            </header>
            <p>
                <strong>Project Code:</strong> {projectData.projectCode}
            </p>
            <p>
                <strong>Project Description</strong> Fill in till this is on
            </p><p>
            <strong>Project Subject</strong> Fill in till this is on
        </p>
            <div className="container">
                <ul className="list-group">{Array.isArray(content) ?
                    content.map((c, index) => (
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Student Name: {c.studentName}</h5>
                                <h5 className="card-title"> The description: {c.description}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Another attribute from
                                    student: {c.picture}</h6>
                                <button className="card-link" id={c._id}
                                >Delete
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
    );
};

export default ViewProject;