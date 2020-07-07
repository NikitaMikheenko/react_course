import React, { Component } from 'react';

class Course extends Component {
    render() {
        const params = new URLSearchParams(this.props.location.search);

        return (
            <div>
                <h1>{params.get('title')}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;