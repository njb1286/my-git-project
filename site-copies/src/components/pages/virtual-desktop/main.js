import React, { Component } from 'react';

import { Apps } from './data';
import RenderApps from "./apps";
import Window from "./window";

export default class VirtualDesktop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            windowIsOpen: false,
            openApp: {

            }
        }

        this.openApp = this.openApp.bind(this);
        this.closeApp = this.closeApp.bind(this);
    }

    openApp(app) {
        this.setState({
            windowIsOpen: true,
            openApp: app
        })
    }

    closeApp() {
        this.setState({
            windowIsOpen: false,
            openApp: {

            }
        })
    }

    render() {
        return (
            <div className='virtual-desktop-site'>     
                <div className="apps">
                    <RenderApps apps={Apps} openApp={this.openApp} />
                </div>

                {this.state.windowIsOpen ? <Window app={this.state.openApp} closeApp={this.closeApp} /> : null}
            </div>
        )
    }
}