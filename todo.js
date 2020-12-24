import React, { useState, useEffect } from 'react';

import todoForm from "./todoForm";

import firebaseDb from "../firebase";

const Todo = () => {

	var [currentId, setCurrentId] = useState('');
    var [todoObjects, settodoObjects] = useState({})

    //Once components load complete
    useEffect(() => {
        
        firebaseDb.child('todo').on('value', snapshot => {
            if (snapshot.val() != null) {
                settodoObjects({
                    ...snapshot.val()
                });
            }
        })
    }, [])


    const addOrEdit = (obj) => {
        if (currentId === '')
        firebaseDb.child('todo').push(
            obj,
            err => {
                if (err)
                    console.log(err)
                else
                    setCurrentId('')
            })
    else
        firebaseDb.child(`todo/${currentId}`).set(
            obj,
            err => {
                if (err)
                    console.log(err)
                else
                    setCurrentId('')
            })
    }

    const onDelete = id => {
        if (window.confirm('Are you sure to delete this record?')) {
            firebaseDb.child(`todo/${id}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
        }
    }


  return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Todo List</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <todoForm {...({ currentId, todoObjects, addOrEdit })} ></todoForm>
                </div>
                <div className="col-md-7">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-dark">
                            <tr>
                                <th >Name</th>
                                <th>Todo Task</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(todoObjects).map((key) => (
                                    <tr key={key}>
                                        <td>{todoObjects[key].Name}</td>
                                        <td>{todoObjects[key].Task}</td>
                                        
                                        <td className="bg-light">
                                            <a className="btn text-primary" onClick={() => { setCurrentId(key) }}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a>
                                            <a className="btn text-danger" onClick={() => { onDelete(key) }}>
                                                <i className="far fa-trash-alt"></i>
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Todo;