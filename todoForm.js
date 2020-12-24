import React, { useState, useEffect } from 'react';


const todoForm = (props) => {
    const initialFieldValues = {
        fullName: '',
        Task: ''
    }
    var [values, setValues] = useState(initialFieldValues)

    useEffect(() => {
        if (props.currentId === '')
            setValues({ ...initialFieldValues })
        else
            setValues({
                ...props.todoObjects[props.currentId]
            })
    }, [props.currentId, props.todoObjects])

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        props.addOrEdit(values);
    }

    return (
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" name="fullName" placeholder="Full Name"
                    value={values.fullName}
                    onChange={handleInputChange} required
                />
            </div>
            <div className="form-group">
                <input className="form-control" name="Task" placeholder="Task"
                        value={values.Task}
                        onChange={handleInputChange} required
                />
            </div>
            <div className="form-group">
                <input type="submit" value={props.currentId === "" ? "Save" : "Update"} required className="btn btn-success btn-block" />
            </div>
        </form>
    );
}

export default todoForm;

