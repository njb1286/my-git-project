import React, { Component } from 'react';

export default class ButtonSwitch extends Component {
    // Props:
        /*
            this.props.content
            this.props.on
            this.props.whenOn
            
        */

    constructor(props) {
        super(props);

        this.state = {
            on: this.props.on ? true : false
        }

        this.toggleSwitch = this.toggleSwitch.bind(this);
    }

    toggleSwitch(func, target) {
        this.setState({
            on: this.state.on ? false : true
        },
            !this.state.on && func ? func(target, !this.state.on) : null
        )
    }

    render() {
        return (
            <div className='button-switch'>
                <input type="checkbox" className='switch-handler' defaultChecked={this.state.on} onInput={e => {
                    this.toggleSwitch(this.props.whenOn, e);
                }} />

                {this.props.content}
            </div>
        )
    }
}