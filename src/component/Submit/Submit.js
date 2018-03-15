import React from 'react';

function Submit(props) {
    return(
        <button className={props.className} type="button">
            {props.text}
        </button>
    );
}

export default Submit;
