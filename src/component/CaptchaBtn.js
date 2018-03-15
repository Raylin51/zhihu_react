import React, { Component } from 'react';

function CaptchaBtn(props) {
    return(
        <button className={props.className} style={{outline: "none"}} onClick={props.onClick} disabled={props.disabled}>
          {props.text}
        </button>
    );
}

export default CaptchaBtn;
