import React, {useState, useEffect} from "react";
import Project from "../../services/auth.project";
import Entries from "../../services/auth.students";
import {Bar} from 'react-chartjs-2';


const ViewProject = (props) => {
    //this is how the items, like project code, are passed into this new component.
    const projectData = props.location.state

    const [content, setContent] = useState("");

    useEffect(() => {
        Entries.getEntries(projectData.projectCode).then(
            (response) => {


                const data = response.data.studentSubmission;
                //this takes the data and calculates how many total sightings were made for morning, afternoon and evening.
                let holder = {}
                data.forEach(function (d) {
                    if (holder.hasOwnProperty(d.time)) {
                        holder[d.time] = holder[d.time] + d.amount;
                    } else {
                        holder[d.time] = d.amount;
                    }
                });


                const timeData = {
                    labels: Object.keys(holder),

                    datasets: [
                        {
                            label: projectData.subject,
                            backgroundColor: 'rgba(75,192,192,1)',
                            borderColor: 'rgba(0,0,0,1)',
                            borderWidth: 2,
                            data: Object.values(holder)
                        }
                    ]
                }
                let stateObject = []
                stateObject['entries'] = data
                stateObject['data'] = timeData
                setContent(stateObject)
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

        const name = e.target.getAttribute("name")
        Entries.delEntry(projectData.projectCode, name).then((response) => {
            window.location.reload()
        })
    };

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
                <strong>Project Description</strong> {projectData.description}
            </p><p>
            <strong>Project Subject</strong> {projectData.subject}
        </p>
            <div className="container">
                <row>
                    <row>
                        <ul className="list-group">{Array.isArray(content['entries']) ?
                            content['entries'].map((c, index) => (
                                <column>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Student Name: {c.studentUsername}</h5>
                                            <h5 className="card-title"> Amount Seen {c.amount}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">Time of day: {c.time}</h6>
                                            <button className="card-link" name={c.studentUsername} onClick={onDel}
                                            >Delete
                                            </button>
                                        </div>
                                    </div>
                                </column>
                            )) : <div className="container">
                                <header className="jumbotron">
                                    <h3>{content}</h3>
                                </header>
                            </div>}

                        </ul>

                </row>
                <column>
                    <div>{content.hasOwnProperty('data') ?
                        <Bar
                            data={content['data']}
                            options={{
                                title: {
                                    display: true,
                                    text: projectData.subject,
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'right'
                                }
                            }}
                        /> : <div className="container">
                            <header className="jumbotron">
                                <h3>{content}</h3>
                            </header>
                        </div>
                    }</div>
                </column>


            </row>
        </div>
</div>
)
    ;
};

export default ViewProject;