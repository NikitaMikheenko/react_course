import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
    state = {
        username: "Dasha"
    }

    render() {
        return (
            <div className="App">
                <UserOutput username={this.state.username} />
                <UserInput value={this.state.username} change={this.changeStateHandler}/>
            </div>
        );
    }

    changeStateHandler = (event) => {
        this.setState({
            username: event.target.value
        });
    }
}

export default App;
