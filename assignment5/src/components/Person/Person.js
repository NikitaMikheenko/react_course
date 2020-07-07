import React from 'react';
import { connect } from 'react-redux';

import './Person.css';
import { onDeletePerson } from "../../redux/actionCreators";

const person = (props) => (
    <div className="Person" onClick={() => props.onDeletePerson(props.personId)}>
        <h1>{props.name}</h1>
        <p>Age: {props.age}</p>
    </div>
);

const mapDispatchToProps = dispatch => ({
    onDeletePerson: (personId) => dispatch(onDeletePerson(personId))
});

export default connect(null, mapDispatchToProps)(person);