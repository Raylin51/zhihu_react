import React, { Component } from 'react';
import './CaptchaBtn.css';
import PropTypes from 'prop-types';

class CaptchaBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    tick() {
        if (this.props.tickTime === 0) {
            clearInterval(this.timerID);
            this.props.tickDone();
        }
        else {
            this.props.tickTime();
        }
    }

    handleGetCaptcha = (event) => {
        if (!(/^((1[3-8][0-9])+\d{8})$/.test(this.props.phoneNumber))){
            this.props.validFaild();
        }
        else {
            this.props.validSuccess();
            this.timerID = setInterval(
                () => this.tick(),
                1000
            );
        }
    }

    render() {
        return(
            <button
                className={ this.props.className }
                style={{ outline: "none" }}
                onClick={ this.handleGetCaptcha }
                disabled={ this.props.disabled }
                type="button">
              { this.props.text }
            </button>
        );
    }
}

CaptchaBtn.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.string,
    validFaild: PropTypes.func,
    validSuccess: PropTypes.func,
    tickTime: PropTypes.func,
    phoneNumber: PropTypes.string
};

export default CaptchaBtn;
