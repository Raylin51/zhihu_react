import React, { Component } from 'react';
import classNames from 'classnames';
// import Input from '../Input/Input';
import './Signin.css';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inconspicuous: true,
            phoneNumber: '',
            password: '',
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

    handleInputChange(key, event) {
        this.setState({[key]: event.target.value});
    }

    chooseInconspicuous = (event) => {
        this.setState({inconspicuous: this.state.inconspicuous ? false : true});
    }

    render() {
        let AccountInput = classNames({
            AccountInput: true,
            long: true
        });
        let PasswordInput = classNames({
            Password: true,
            Inconspicuous: this.state.inconspicuous,
            Conspicuous: !this.state.inconspicuous,
            HasContent: !(this.state.password === '')
        });
        let intputOneClassName = classNames({
            Input: !this.state.inputOneError,
            InputOnBlur: this.state.inputOneError
        });
        let inputTwoClassName = classNames({
            Input: !this.state.inputTwoError,
            InputOnBlur: this.state.inputTwoError
        });

        let type = this.state.inconspicuous ? 'password' : '';
        let inputOnePlaceHolder = this.state.inputOneError ? "请输入手机号" : "手机号";
        let inputTwoPlaceHolder = this.state.inputTwoError ? "请输入密码" : "密码";

        return(
            <div className="Signin">
                <div className="Account">
                    <div className={ AccountInput }>
                        <input
                            value={ this.state.phoneNumber }
                            className={ intputOneClassName }
                            placeholder={ inputOnePlaceHolder }
                            onBlur={ this.inputOnBlur.bind(this, 'inputOneError') }
                            onFocus={ this.inputOnFocus.bind(this, 'inputOneError') }
                            onChange={ this.handleInputChange.bind(this, 'phoneNumber') }>
                        </input>
                    </div>
                </div>
                <div className="Password">
                    <div className={ PasswordInput }>
                        <input
                            value={ this.state.password }
                            className={ inputTwoClassName }
                            placeholder={ inputTwoPlaceHolder }
                            onBlur={ this.inputOnBlur.bind(this, 'inputTwoError') }
                            onFocus={ this.inputOnFocus.bind(this, 'inputTwoError') }
                            onChange={ this.handleInputChange.bind(this, 'password') }
                            type={type}>
                        </input>
                    </div>

                  <button className="btn ChooseInconspicuous" style={{outline: "none", boxShadow: "none"}} onClick={this.chooseInconspicuous} type="button">
                        <svg width="24" height="20" viewBox="0 0 24 24" style={{verticalAlign: "middle", height: "20px", "width": "24px"}}>
                            {this.state.inconspicuous ? (
                                <path d="M17.007 11.504c0 .65-.13 1.26-.36 1.83l3 3.073S23 14.136 23 11.504C23 8.008 17.255 4 11.995 4c-1.4 0-2.741.25-3.982.701l2.161 2.16c.57-.23 1.18-.36 1.831-.36a5.004 5.004 0 0 1 5.002 5.003zM2.57 4.342l2.067 2.075C3.499 7.258 1 9.119 1 11.504c0 3.336 5.79 7.503 11.005 7.503 1.55 0 3.031-.3 4.382-.84l.42.42 2.125 2.118s.782.571 1.314 0-.074-1.305-.074-1.305L3.955 3.183s-.76-.742-1.385-.19c-.626.554 0 1.35 0 1.35zm4.963 4.96l1.55 1.552c-.05.21-.08.43-.08.65 0 1.66 1.341 3.001 3.002 3.001.22 0 .44-.03.65-.08l1.551 1.551c-.67.33-1.41.53-2.2.53a5.004 5.004 0 0 1-5.003-5.002c0-.79.2-1.53.53-2.201zm4.312-.78l3.151 3.152.02-.16c0-1.66-1.34-3.001-3.001-3.001l-.17.01z" fillRule="evenodd"></path>
                            ) : (
                                <path d="M1 11.5C1 15 7 19 12 19s11-4 11-7.5S17 4 12 4 1 8 1 11.5zm11 5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm-3-5c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z" fillRule="evenodd"></path>
                            )}
                        </svg>
                    </button>
                </div>
                <div className="Options">
                    <button className="LeftBtn btn Blue" style={{outline: "none"}} type="button">手机验证码登录</button>
                    <button className="RightBtn btn Gray" style={{outline: "none"}} type="button">忘记密码？</button>
                </div>
                <button className="Register" type="button">
                    登录
                </button>
                <div className="Login-footer">
                    <span>
                        <button className="btn FooterBtn" style={{outline: "none"}} type="button">二维码登录</button>
                    </span>
                    <span> · </span>
                    <span>
                        <button className="btn FooterBtn" style={{outline: "none"}} type="button">海外手机登录</button>
                    </span>
                    <span> · </span>
                    <span>
                        <button className="btn FooterBtn" style={{outline: "none"}} type="button">社交账号登录</button>
                    </span>
                </div>
            </div>
        );
    }
}

export default Signin;
