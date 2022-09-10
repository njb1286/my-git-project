import React, { Component } from 'react';

import ActionBar from '../helpers/action-bar';
import { setLocalStorageItem, getLocalStorageItem } from '../helpers/local-storage';

export default class Notepad extends Component {
    constructor() {
        super();
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
                        <div onMouseDown={() => setLocalStorageItem('notepad', 'text', document.querySelector('.notepad-content').value)}>Save</div>,
                        <div>Save As</div>,
                        <div>Save To File</div>,
                        <div onMouseDown={() => document.querySelector('.close-wrapper').click()}>Close</div>,
                    ]} />

                    <div className="action-input">
                        <div>Font Size</div>
                        <input type="number" className='user-input' onInput={e => {
                            if (e.target.value < 1) e.target.value = 1;
                            document.querySelector('.notepad-content').style.fontSize = `${e.target.value}px`;
                        }} />
                        <div>px</div>
                    </div>
                </div>
                
                <textarea style={{
                    resize: "none",
                    userSelect: 'none',
                    outline: "none",
                    border: "none"
                }} className="notepad-content" defaultValue={getLocalStorageItem('notepad', 'text')} />
            </div>
        )
    }
}