import React, { Component } from 'react';
import './App.css';
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
    state = {
        text: ""
    }

    render() {
        let charList = this.state.text.split('').map((c, index) =>
            <CharComponent key={index} character={c} click={() => this.removeCharacterHandler(index)} />
        );

        return (
            <div className="App">
                <input onChange={this.changeTextHandler} value={this.state.text}/>
                <ValidationComponent length={this.state.text.length} />
                {charList}
            </div>
        );
    }

    changeTextHandler = (event) => {
        this.setState({
            text: event.target.value
        });
    }

    removeCharacterHandler = (index) => {
        let text = this.state.text.split('');

        text.splice(index, 1);

        this.setState({ text: text.join('') });
    }
}

export default App;
