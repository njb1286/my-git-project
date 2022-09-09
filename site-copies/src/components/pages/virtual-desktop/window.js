import React from 'react';

import { FaRegWindowMaximize as MaximizeIcon } from "react-icons/fa";

export default class Window extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // windowSize: {
            //     width: window.innerWidth / 2,
            //     height: window.innerHeight / 2,
            //     maxWidth: window.innerWidth,
            //     maxHeight: window.innerHeight,

            //     posX: window.innerWidth / 4,
            //     posY: window.innerHeight / 4
            // },

            normalWindow: {
                width: `${window.innerWidth / 2}px`,
                height: `${window.innerHeight / 2}px`,
                transform: `translate(${window.innerWidth / 4}px, ${window.innerHeight / 4}px)`
            },

            fullScreenWindow: {
                width: `${window.innerWidth}px`,
                height: `${window.innerHeight}px`,
                transform: ""
            },

            fullScreen: false
        }

        this.toggleFullScreen = this.toggleFullScreen.bind(this);
    }

    toggleFullScreen() {
        if (this.state.fullScreen) {
            this.setState({
                fullScreen: false
            })
        } else {
            this.setState({
                fullScreen: true
            })
        }
    }

    render() {
        return (
            <div className="open-app-wrapper">
                <div 
                    className="open-app" 
                    style={
                        this.state.fullScreen ? this.state.fullScreenWindow : this.state.normalWindow
                    }
                >
                    <div className="info-bar-wrapper">
                        <div className="info-bar">

                            <div className="left">
                                <div className="icon-wrapper">
                                    <img src={this.props.app.icon} alt="" />
                                </div>
                            </div>

                            <div className="center">
                                <h1>Window</h1>
                            </div>

                            <div className="right">
                                <button onClick={() => this.toggleFullScreen()}>
                                    <MaximizeIcon />
                                </button>

                                <button onClick={() => this.props.closeApp()}>X</button>
                            </div>

                        </div>
                    </div>

                    <div className="content">
                        <textarea placeholder='Write some text here...'></textarea>
                    </div>
                </div>
            </div>
        )
    }
}