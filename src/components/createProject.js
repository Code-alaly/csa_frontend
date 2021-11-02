import React, {useState, useRef} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import project from "../services/auth.project"

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
    const [code, setCode] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
    };

    const onChangeCode = (e) => {
        const code = e.target.value;
        setCode(code);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        setMessage("");
        setSuccessful(false);
        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            project.createProject(code, name, ).then(
                (response) => {
                    setMessage(response.data.message);
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
                            <div className="form-group">
                                <label htmlFor="lname">Project Code</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="code"
                                    value={code}
                                    onChange={onChangeCode}
                                    validations={[required]}
                                />
                            </div>


                            <div className="form-group">
                                <button className="btn btn-primary btn-block">Sign Up</button>
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