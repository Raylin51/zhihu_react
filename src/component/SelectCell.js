import React, { Component } from 'react';

function SelectCell(props) {
    return(
        <button value={props.value} onClick={props.selectArea}>
          {props.value}
        </button>
    );
}

export default SelectCell;
