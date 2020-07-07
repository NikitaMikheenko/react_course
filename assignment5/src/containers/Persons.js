import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    render() {
        return (
            <div>
                <AddPerson />
                {this.props.persons.map((person, index) => (
                    <Person
                        key={index}
                        personId={index}
                        name={person.name}
                        age={person.age}
                    />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    persons: state.persons
});

export default connect(mapStateToProps)(Persons);