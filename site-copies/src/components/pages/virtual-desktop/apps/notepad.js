import React, { Component } from 'react';

import ActionBar from '../helpers/action-bar';
import ButtonSwitch from '../switches/button';

export default class Notepad extends Component {
    constructor() {
        super();

        this.state = {
            // fontSize: getLocalStorageItem('notepad').fontSize,
            // text: getLocalStorageItem('notepad').text,
            // fontWeight: getLocalStorageItem('notepad').fontWeight,
            // fontStyle: getLocalStorageItem('notepad').fontStyle,
            // textDecoration: getLocalStorageItem('notepad').textDecoration,

            fontWeight: JSON.parse(localStorage.notepad).fontWeight,
            fontSize: JSON.parse(localStorage.notepad).fontSize,
            textDecoration: JSON.parse(localStorage.notepad).textDecoration,
            text: JSON.parse(localStorage.notepad).text,
            fontStyle: JSON.parse(localStorage.notepad).fontStyle
        }


        this.handleSaveAs = this.handleSaveAs.bind(this);
        this.changeItem = this.changeItem.bind(this);
    }

    range(start, end) {
        return Array.from({ length: end - start + 1 }, (_, i) => i);
    }

    changeItem(key, val) {
        this.setState({
           [key]: val
        }, () => localStorage.notepad = JSON.stringify({
            fontWeight: this.state.fontWeight,
            fontSize: this.state.fontSize,
            textDecoration: this.state.textDecoration,
            text: this.state.text,
            fontStyle: this.state.fontStyle,
        }))
    }
    
    componentDidMount() {
        if (!JSON.parse(localStorage.notepad)) localStorage.notepad = JSON.stringify({
            fontWeight: "",
            fontSize: "",
            textDecoration: "",
            text: "",
            fontStyle: ""
        })
        
        // Click events for action checkboxes
        document.querySelectorAll('.action-checkbox').forEach(elmt => elmt.onclick = e => e.target.type === "checkbox" ? null : elmt.children[1].click());
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
                    {/* <ActionBar title="File" actions={[
                            <div onMouseDown={() => {
                                this.changeItem('text', this.state.text);
                            }}>Save</div>,
                            <div onMouseDown={this.handleSaveAs}>Save As</div>,
                            <div>Save To File</div>,
                            <div onMouseDown={() => document.querySelector('.close-wrapper').click()}>Close</div>,
                        ]}
                        closeOnClick 
                    /> */}

                    <ActionBar 
                        title="File" 
                        actions={[
                            <ButtonSwitch 
                                content={
                                    <div>Save</div>
                                }
                            />
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