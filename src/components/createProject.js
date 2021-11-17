import React, {useState, useRef} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import project from "../services/auth.project"
import TextareaAutosize from 'react-textarea-autosize';

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const CreateProject = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [code, setCode] = useState("");
    const [subj, setSubj] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
    };
    const onChangeDesc = (e) => {
        const desc = e.target.value;
        setDesc(desc);
    };
    const onChangeSubj = (e) => {
        const subj = e.target.value;
        setSubj(subj);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        setMessage("");
        setSuccessful(false);
        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            project.createProject(code, name,).then(
                (response) => {
                    setMessage('Project has been successfully created');
                    setSuccessful(true);
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message.data ||
                        error.toString();

                    setMessage(resMessage + " " + error.response.data);
                    setSuccessful(false);
                }
            );
        }


    };

    return (
        <div className="col-md-12">
            <div className="card card-container">
                <Form onSubmit={handleRegister} ref={form}>
                    {!successful && (
                        <div>
                            <div className="form-group">
                                <label htmlFor="fname">Project Name</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={name}
                                    onChange={onChangeName}
                                    validations={[required]}
                                />
                            </div>
                            {/*TODO make it so that this thing required works, cause right now it frickin don't bro. */}
                            <div className="form-group">
                                <label htmlFor="lname">Project Description</label>
                                <TextareaAutosize
                                    className="form-control"
                                    name="desc"
                                    value={desc}
                                    onChange={onChangeDesc}
                                    validations={[required]}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lname">Project Subject</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="subj"
                                    value={subj}
                                    onChange={onChangeSubj}
                                    validations={[required]}
                                />
                            </div>


                            <div className="form-group">
                                <button className="btn btn-primary btn-block">Create Project</button>
                            </div>
                        </div>
                    )}

                    {message && (
                        <div className="form-group">
                            <div
                                className={successful ? "alert alert-success" : "alert alert-danger"}
                                role="alert"
                            >
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{display: "none"}} ref={checkBtn}/>
                </Form>
            </div>
        </div>
    );
}

export default CreateProject