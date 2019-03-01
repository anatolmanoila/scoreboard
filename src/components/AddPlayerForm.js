import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddPlayerForm extends Component {

    static propTypes = {
        addPlayer: PropTypes.func.isRequired
    }

    state = {
        value: ''
    };

    handleValueChange = (e) => {
        this.setState({ value: e.target.value })
    };

    addPlayer = (e) => {
        e.preventDefault();
        if (this.state.value.length === 0) {
            return;
        }
        this.props.addPlayer(this.state.value);
        this.setState({ value: '' });
    }

    render() {
        return (
            <form onSubmit={this.addPlayer}>
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