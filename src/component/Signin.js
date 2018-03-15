import React, { Component } from 'react';
import classNames from 'classnames';
import Input from './Input';
import Submit from './Submit';
import SelectCell from './SelectCell';
import CaptchaBtn from './CaptchaBtn';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            method: 'password',
            inconspicuous: true,
            vaildNumber: true,
            phoneNumber: '',
            password: '',
            captcha: ''
        };
    }

    clearMessage = () => {
        this.setState({validNumber: true});
    }

    handlePhoneNumberChange = (event) => {
        this.setState({phoneNumber: event.target.value});
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    chooseInconspicuous = (event) => {
        this.setState({inconspicuous: this.state.inconspicuous ? false : true});
    }

    render() {
        let AccountInput = classNames({
            AccountInput: true,
            long: (this.state.method === 'password')
        });

        let PasswordInput = classNames({
            Password: true,
            Inconspicuous: this.state.inconspicuous,
            Conspicuous: !this.state.inconspicuous,
            HasContent: !(this.state.password === '')
        });

        let type = this.state.inconspicuous ? 'password' : '';

        return(
            <div className="Signin">
                <div className="Account">
                    <Input
                        className={AccountInput}
                        placeHolderOnFocus='手机号或邮箱'
                        placeHolderOnBlur='请输入手机号或邮箱'
                        onChange={this.handlePhoneNumberChange}
                        onFocus={this.clearMessage}
                    />
                </div>
                <div className="Password">
                    <Input
                        className={PasswordInput}
                        placeHolderOnFocus='密码'
                        placeHolderOnBlur='请输入密码'
                        onChange={this.handlePasswordChange}
                        type={type}
                    />
                    <button className="btn ChooseInconspicuous" style={{outline: "none", boxShadow: "none"}} onClick={this.chooseInconspicuous}>
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
                    <button className="LeftBtn btn Blue" style={{outline: "none"}}>手机验证码登录</button>
                    <button className="RightBtn btn Gray" style={{outline: "none"}}>忘记密码？</button>
                </div>
                <Submit className="Register" text="登录"/>
                <div className="Login-footer">
                    <span>
                        <button className="btn FooterBtn" style={{outline: "none"}}>二维码登录</button>
                    </span>
                    <span> · </span>
                    <span>
                        <button className="btn FooterBtn" style={{outline: "none"}}>海外手机登录</button>
                    </span>
                    <span> · </span>
                    <span>
                        <button className="btn FooterBtn" style={{outline: "none"}}>社交账号登录</button>
                    </span>
                </div>
            </div>
        );
    }
}

export default Signin;