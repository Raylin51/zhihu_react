import React from 'react';
import './CaptchaBtn.css';

function CaptchaBtn(props) {
    return(
        <button className={props.className} style={{outline: "none"}} onClick={props.onClick} disabled={props.disabled} type="button">
          {props.text}
        </button>
    );
}

export default CaptchaBtn;
