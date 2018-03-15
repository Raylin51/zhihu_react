import React, { Component } from 'react';

function Submit(props) {
    return(
        <button className={props.className}>
            {props.text}
        </button>
    );
}

export default Submit;
