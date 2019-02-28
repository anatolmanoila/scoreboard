
import React, { Component } from 'react';

class AddPlayerForm extends Component {

    state = {
        value: ''
    };

    handleValueChange = (e) => {
        //console.log(e);
        console.log(e.target);
        this.setState({
            value: e.target.value
        });
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.state.value);
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.onSubmitForm }>
                    <input type="text"
                            value={ this.state.value }
                            onChange={ this.handleValueChange }
                            placeholder="Enter your name"
                    />
                    <input type="submit"
                           value="Add player" />
                </form>
            </div>
        );
    }
}

export default AddPlayerForm;