import React, { Component } from 'react';

class AddPlayerForm extends Component {

    state = {
        value: ''
    };

    handleValueChange = (e) => {
        this.setState({ value: e.target.value })
    };

    render() {
        console.log(this.state.value);
        return (
            <form>
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