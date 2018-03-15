import React, { Component } from 'react';
import classNames from 'classnames';
import Input from './Input';
import Submit from './Submit';
import SelectCell from './SelectCell';
import CaptchaBtn from './CaptchaBtn';

class Signup extends Component {
    constructor(props) {
        super (props);
        this.state = {
            area: '中国 +86',
            areas: [
                "中国 +86",
                "美国 +1",
                "日本 +81",
                "中国香港 +852",
                "中国台湾 +886"
            ],
            phoneNumber: '',
            captcha: '',
            getCaptcha: false,
            getCaptchaText: '获取短信验证码',
            validNumber: true,
            tickTime: 60
        };
    }

    tick() {
        this.setState({tickTime: this.state.tickTime - 1});
        if (this.state.tickTime === 0) {
            clearInterval(this.timerID);
            this.setState({getCaptcha: false, getCaptchaText: '获取短信验证码', tickTime: 60});
        }
    }

    clearMessage = () => {
        this.setState({validNumber: true});
    }

    handleGetCaptcha = (event) => {
        if (!(/^((1[3-8][0-9])+\d{8})$/.test(this.state.phoneNumber))){
            this.setState({validNumber: false});
        }
        else {
            this.setState({getCaptcha: true, getCaptchaText: '秒后可重发', tickTime: this.state.tickTime - 1});
            this.timerID = setInterval(
                () => this.tick(),
                1000
            );
        }
    }

    handlePhoneNumberChange = (event) => {
        this.setState({phoneNumber: event.target.value});
    }

    handleCaptchaChange = (event) => {
        this.setState({captcha: event.target.value});
    }

    renderCell(area) {
        return(
            <SelectCell value={area} selectArea={() => this.setState({area: area})} />
        );
    }

    render() {
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
        let disabled = this.state.getCaptcha ? "disabled" : "" ;
        let message = this.state.validNumber ? "" : "请输入正确的手机号";
        let text = ((this.state.tickTime === 60) ? "" : this.state.tickTime) + this.state.getCaptchaText;

        return(
            <div className="Signup">
                <div className="Account">
                    <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{outline: "none"}}>
                            {this.state.area}
                            <span style={{display: "inline-flex", alignItems: "center"}}>
                                <svg className="arrow" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                                    <path d="M12 16.183l2.716-2.966a.757.757 0 0 1 1.064.001.738.738 0 0 1 0 1.052l-3.247 3.512a.758.758 0 0 1-1.064 0L8.22 14.27a.738.738 0 0 1 0-1.052.758.758 0 0 1 1.063 0L12 16.183zm0-9.365L9.284 9.782a.758.758 0 0 1-1.064 0 .738.738 0 0 1 0-1.052l3.248-3.512a.758.758 0 0 1 1.065 0L15.78 8.73a.738.738 0 0 1 0 1.052.757.757 0 0 1-1.063.001L12 6.818z" fillRule="evenood"></path>
                                </svg>
                            </span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            {this.state.areas.map((area) => {
                                return(
                                    <li>{this.renderCell(area)}</li>
                                );
                            })}
                        </ul>
                    </div>
                    <span className="AccountSeperator">&nbsp;</span>
                    <Input className='AccountInput' placeHolderOnFocus='手机号' placeHolderOnBlur='请输入手机号' onChange={this.handlePhoneNumberChange} onFocus={this.clearMessage}/>
                    <div className="Message">
                        {message}
                    </div>
                </div>
                <div className="Captcha">
                    <Input className='CaptchaInput' placeHolderOnFocus='请输入6位短信验证码' placeHolderOnBlur='请输入短信验证码' onChange={this.handleCaptchaChange}/>
                    <CaptchaBtn className={btnSMS} style={{outline: "none"}} onClick={this.handleGetCaptcha} disabled={disabled} text={text} />
                </div>
                <div className={call}>
                    <CaptchaBtn className={btnCall} style={{outline: "none"}} onClick={this.handleGetCaptcha} disabled={disabled} text="接收语音验证码" />
                </div>
                <Submit className="Register" text="注册"/>
                <div className="Options">
                    <button className="LeftBtn btn Gray" style={{outline: "none"}}>注册即代表你同意《知乎协议》</button>
                    <button className="RightBtn btn Blue" style={{outline: "none"}}>注册机构号</button>
                </div>
            </div>
        );
    }
}

export default Signup;