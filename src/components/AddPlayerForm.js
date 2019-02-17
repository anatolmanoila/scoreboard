import React, { Component } from 'react';

class AddPlayerForm extends Component {

    state = {
        value: ''
    };

    handleValueChange = (e) => {
        this.setState({ value: e.target.value })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.value.length === 0) {
            return;
        }
        this.props.addPlayer(this.state.value);
        this.setState({ value: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                        value={this.state.value}
                        onChange={this.handleValueChange}
                        placeholder="Enter players name"
                />

                <input type="submit"
                        value="Add player"
                />
            </form>
        );
    }
    // now we have a controlled input
}

export default AddPlayerForm;