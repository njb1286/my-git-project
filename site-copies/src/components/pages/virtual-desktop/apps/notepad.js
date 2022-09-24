import React, { Component } from 'react';

import ActionBar from '../helpers/action-bar';
import { setLocalStorageItem, getLocalStorageItem } from '../helpers/local-storage';
import ButtonSwitch from '../switches/button';

export default class Notepad extends Component {
    constructor() {
        super();

        this.state = {
            fontSize: getLocalStorageItem('notepad').fontSize,
            text: getLocalStorageItem('notepad').text,
            fontWeight: getLocalStorageItem('notepad').fontWeight,
            fontStyle: getLocalStorageItem('notepad').fontStyle,
            textDecoration: getLocalStorageItem('notepad').textDecoration,
        }

        this.changeValue = this.changeValue.bind(this);
        this.handleSaveAs = this.handleSaveAs.bind(this);
    }

    range(start, end) {
        return Array.from({ length: end - start + 1 }, (_, i) => i);
    }

    componentDidMount() {
        // Click events for action checkboxes

        document.querySelectorAll('.action-checkbox').forEach(elmt => elmt.onclick = e => e.target.type === "checkbox" ? null : elmt.children[1].click());
    }

    changeValue(key, val) {
        this.setState({
            [key]: val
        },
        () => {
            setLocalStorageItem('notepad', key, val);
            console.log("State", this.state[key]);
        }
        )

    }

    toggleValue(val, on, off) {
        return val === on ? off : on;
    } 

    handleSaveAs() {
        this.props.openSaveFile(this.state.text);
        this.props.closeApp();
    }

    render() {
        return (
            <div style={{
                display: "grid",
                gridTemplateRows: "0fr 1fr",
                height: "100%"
            }}>
                <div className="actions-bar">
                    <ActionBar title="File" actions={[
                            <div onMouseDown={() => {
                                setLocalStorageItem('notepad', 'text', this.state.text);
                            }}>Save</div>,
                            <div onMouseDown={this.handleSaveAs}>Save As</div>,
                            <div>Save To File</div>,
                            <div onMouseDown={() => document.querySelector('.close-wrapper').click()}>Close</div>,
                        ]}
                        closeOnClick 
                    />
                </div>
                
                <textarea 
                    style={{
                        resize: "none",
                        userSelect: 'none',
                        outline: "none",
                        border: "none",
                        fontSize: `${this.state.fontSize}px`,
                        fontWeight: this.state.fontWeight,
                        fontStyle: this.state.fontStyle,
                        textDecoration: this.state.textDecoration
                    }} 
                    className="notepad-content" 
                    defaultValue={this.state.text} 
                    onKeyUp={e => this.setState({ text: e.target.value })}
                />
            </div>
        )
    }
}