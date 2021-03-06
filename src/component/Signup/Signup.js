import React, { Component } from 'react';
import classNames from 'classnames';
import CaptchaBtn from '../CaptchaBtn/CaptchaBtn';
import './Signup.css';

class Signup extends Component {
    constructor(props) {
        super (props);
        this.state = {
            area: '中国 +86',
            phoneNumber: '',
            captcha: '',
            getCaptcha: false,
            validNumber: true,
            getCaptchaText: '获取短信验证码',
            tickTime: 60,
            inputOneError: false,
            inputTwoError: false
        };
    }

    inputOnBlur(key, event) {
        if (event.target.value === '') {
            this.setState({
                [key]: true
            });
        }
        else {
            this.setState({
                [key]: false
            });
        }
    }

    inputOnFocus(key, event) {
        this.setState({
            [key]: false
        });
    }

    clearMessage = () => {
        this.setState({validNumber: true});
    }

    tickTime = (event) => {
        this.setState({tickTime: this.state.tickTime - 1});
    }

    tickDone = (event) => {
        this.setState({
            getCaptcha: false,
            tickTime: 60
        });
    }

    validSuccess = (event) => {
        this.setState({
            getCaptchaText: '秒后可重发',
            validNumber: true,
            getCaptcha: true,
            tickTime: this.state.tickTime - 1
        });
    }

    validFaild = (event) => {
        this.setState({
            validNumber: false
        });
    }

    handleGetCaptcha = (event) => {
    }

    handleInputChange = (key, event) => {
        this.setState({[key]: event.target.value});
    }

    renderCell(area) {
        return(
            <button
                value={area}
                onClick={
                    () => this.setState({area: area})
                }
                type="button">
                {area}
            </button>
        );
    }

    render() {
        let areas = [
            "中国 +86",
            "美国 +1",
            "日本 +81",
            "中国香港 +852",
            "中国台湾 +886"
        ];
        let btnSMS = classNames({
            btn: true,
            GetSMS: !this.state.getCaptcha,
            Waiting: this.state.getCaptcha
        });
        let btnCall = classNames({
            btn: true,
            GetCall: !this.state.getCaptcha,
            Waiting: this.state.getCaptcha
        });
        let call = classNames({
            Call: true,
            Hidden: this.state.getCaptcha,
        });
        let intputOneClassName = classNames({
            Input: !this.state.inputOneError,
            InputOnBlur: this.state.inputOneError
        });
        let inputTwoClassName = classNames({
            Input: !this.state.inputTwoError,
            InputOnBlur: this.state.inputTwoError
        });

        let disabled = this.state.getCaptcha ? "disabled" : "" ;
        let message = this.state.validNumber ? "" : "请输入正确的手机号";
        let text = ((this.state.tickTime === 60) ? "" : this.state.tickTime) + this.state.getCaptchaText;
        let inputOnePlaceHolder = this.state.inputOneError ? "请输入手机号" : "手机号";
        let inputTwoPlaceHolder = this.state.inputTwoError ? "请输入短信验证码" : "请输入6位短信验证码";

        return(
            <div className="Signup">
                <div className="Account">
                    <div className="dropdown">
                        <button
                            className="btn dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            style={{outline: "none"}}>
                            {this.state.area}
                            <span style={{display: "inline-flex", alignItems: "center"}}>
                                <svg
                                    className="arrow"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24">
                                    <path d="M12 16.183l2.716-2.966a.757.757 0 0 1 1.064.001.738.738 0 0 1 0 1.052l-3.247 3.512a.758.758 0 0 1-1.064 0L8.22 14.27a.738.738 0 0 1 0-1.052.758.758 0 0 1 1.063 0L12 16.183zm0-9.365L9.284 9.782a.758.758 0 0 1-1.064 0 .738.738 0 0 1 0-1.052l3.248-3.512a.758.758 0 0 1 1.065 0L15.78 8.73a.738.738 0 0 1 0 1.052.757.757 0 0 1-1.063.001L12 6.818z" fillRule="evenood"></path>
                                </svg>
                            </span>
                        </button>
                        <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenu1">
                            {areas.map((area, i) => {
                                return(
                                    <li key={'area_' + i} >
                                        {this.renderCell(area, i)}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <span className="AccountSeperator">&nbsp;</span>
                    <div className="AccountInput">
                        <input
                            value={ this.state.phoneNumber }
                            className={ intputOneClassName }
                            placeholder={ inputOnePlaceHolder }
                            onBlur={ this.inputOnBlur.bind(this, 'inputOneError') }
                            onFocus={ () => {
                                this.inputOnFocus('inputOneError');
                                this.clearMessage();
                            }}
                            onChange={ this.handleInputChange.bind(this, 'phoneNumber') }>
                        </input>
                    </div>

                    <div className="Message">
                        {message}
                    </div>
                </div>
                <div className="Captcha">
                    <div className="CaptchaInput">
                        <input
                            value={ this.state.captcha }
                            className={ inputTwoClassName }
                            placeholder={ inputTwoPlaceHolder }
                            onBlur={ this.inputOnBlur.bind(this, 'inputTwoError')}
                            onFocus={ this.inputOnFocus.bind(this, 'inputTwoError') }
                            onChange={ this.handleInputChange.bind(this, 'captcha') }>
                        </input>
                    </div>

                    <CaptchaBtn
                        className={btnSMS}
                        disabled={disabled}
                        validFaild={ this.validFaild }
                        validSuccess={ this.validSuccess }
                        tickDone={ this.tickDone }
                        tickTime={ this.tickTime }
                        phoneNumber={ this.state.phoneNumber }
                        text={ text } />
                </div>
                <div className={call}>
                    <CaptchaBtn
                        className={ btnCall }
                        disabled={ disabled }
                        validFaild={ this.validFaild }
                        validSuccess={ this.validSuccess }
                        tickTime={ this.tickTime }
                        phoneNumber={ this.state.phoneNumber }
                        text='接收语音验证码' />
                </div>
                <button className="Register" type="button">
                    注册
                </button>
                <div className="Options">
                    <button
                        className="LeftBtn btn Gray"
                        style={{outline: "none"}}
                        type="button">
                        注册即代表你同意《知乎协议》
                    </button>
                    <button
                        className="RightBtn btn Blue"
                        style={{outline: "none"}}
                        type="button">
                        注册机构号
                    </button>
                </div>
            </div>
        );
    }
}

export default Signup;
