import React, { Component } from 'react';

function Download(props) {
    return(
        <div className={props.className}>
            <button className={props.btnClassName} style={{outline: "none"}} onClick={props.onClick}>{props.text}</button>
        </div>
    );
}

export default Download;
