import React, { useState } from 'react';
import { connect } from 'react-redux';

import './AddPerson.css';
import { onAddPerson } from '../../redux/actionCreators';

const addPerson = (props) => {
    const [store, setStore] = useState({
        name: '',
        age: ''
    });

    const nameChangedHandler = (event) => {
        setStore({
            ...store,
            name: event.target.value
        });
    };

    const ageChangedHandler = (event) => {
        setStore({
            ...store,
            age: event.target.value
        });
    };

    return (
        <div className="AddPerson">
            <input
                type="text"
                placeholder="Name"
                onChange={nameChangedHandler}
                value={store.name}
            />
            <input
                type="number"
                placeholder="Age"
                onChange={ageChangedHandler}
                value={store.age}
            />
            <button onClick={() => props.onAddPerson(store)}>Add Person</button>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    onAddPerson: value => dispatch(onAddPerson(value))
});

export default connect(null, mapDispatchToProps)(addPerson);