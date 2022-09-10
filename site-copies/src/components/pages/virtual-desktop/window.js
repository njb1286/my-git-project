import React, { Component } from 'react';

import { FaRegWindowMaximize as MaximizeIcon } from "react-icons/fa";
import { VscListFilter } from 'react-icons/vsc';

import DragElement from './drag-element';
import ScaleElement from './scale-element';

export default class Window extends Component {
    constructor(props) {
        super(props);

        this.state = {
            left: window.innerWidth / 4,
            top: window.innerHeight / 4,

            width: `${window.innerWidth / 2}px`,
            height: `${window.innerHeight / 2}px`,

            fullScreen: false
        }

        this.toggleFullScreen = this.toggleFullScreen.bind(this);
        this.handleWindowMove = this.handleWindowMove.bind(this);
        this.handleWindowScale = this.handleWindowScale.bind(this);
    }

    handleMaxBounds(axis = "x", value) {
        const width = window.innerWidth / 2;
        const height = window.innerHeight / 2;

        if (axis === "x") {
            if (value >= 0) return value;
            else if (value < 0) return 0;
        } else if (axis === 'y') {
            if (value >= 0) return value;
            else if (value < 0) return 0;
        } else throw new Error(`Incorrect axis type: ${axis}. Valid values: x or y`)
    }

    handleWindowMove(x, y) {
        this.setState({
            left: this.handleMaxBounds("x", x),
            top: this.handleMaxBounds("y", y)
        })
    }

    handleWindowScale(x, y) {
        this.setState({
            width: x >= 500 ? x : 500,
            height: y >= 340 ? y : 340
        })
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

    componentDidMount() {
        DragElement(document.querySelector('.open-app'), document.querySelector('.info-bar'), this.handleWindowMove)
        ScaleElement(document.querySelector('.open-app'), document.querySelector('.scale-box'), this.handleWindowScale)
    }

    render() {
        return (
            <div className="open-app-wrapper">
                <div 
                    className="open-app" 
                    style={
                        this.state.fullScreen ? {
                            width: `${window.innerWidth}px`,
                            height: `${window.innerHeight}px`,
                            top: '0',
                            left: '0'
                        } : {
                            width: this.state.width,
                            height: this.state.height,
                            top: `${this.state.top}px`,
                            left: `${this.state.left}px`
                        }
                    }
                >
                    <div className="info-bar-wrapper">
                        <div className={`info-bar${this.state.fullScreen ? " full-screen" : ""}`} >

                            <div className="left">
                                <div className="icon-wrapper">
                                    <img src={this.props.app.icon} alt="" />
                                </div>
                            </div>

                            <div className="center">
                                <h1>{this.props.app.name}</h1>
                            </div>

                            <div className="right">
                                <div onClick={() => this.toggleFullScreen()} className="full-screen-wrapper btn-wrapper">
                                    <div className="full-screen-btn"><MaximizeIcon /></div>
                                </div>

                                <div onClick={() => this.props.closeApp()} className="close-wrapper btn-wrapper">
                                    <div className="close-btn">X</div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="content">
                        {this.props.app.content}
                    </div>

                    <div className="scale">
                        <div className="scale-box">
                            <VscListFilter className='resize-icon' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}