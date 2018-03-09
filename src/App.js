import React, { Component } from 'react';
import './App.css';
import classNames from 'classnames';

function Submit(props) {
  return(
    <button className={props.className}>
      {props.text}
    </button>
  );
}

function CaptchaBtn(props) {
  return(
    <button className={props.className} style={{outline: "none"}} onClick={props.onClick} disabled={props.disabled}>
      {props.text}
    </button>
  );
}

function SelectCell(props) {
  return(
    <button value={props.value} onClick={props.selectArea}>
      {props.value}
    </button>
  );
}

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: "Input",
      placeHolder: this.props.placeHolderOnFocus
    };
  }

  inputOnBlur = (event) => {
    if (event.target.value === '') {
      this.setState({
        className: "InputOnBlur",
        placeHolder: this.props.placeHolderOnBlur
      });
    }
    else {
      this.setState({
        className: "Input",
        placeHolder: this.props.placeHolderOnFocus
      });
    }
  }

  inputOnFocus = (event) => {
    this.setState({
      className: "Input",
      placeHolder: this.props.placeHolderOnFocus
    });
  }

  render() {
    let focus = this.props.onFocus ? (
      () => {this.inputOnFocus(); this.props.onFocus()}
    ) : (
      () => {this.inputOnFocus()}
    )
    return(
      <div className={this.props.className}>
        <input
          className={this.state.className}
          placeholder={this.state.placeHolder}
          onBlur={this.inputOnBlur}
          type={this.props.type}
          onFocus={focus}
          onChange={this.props.onChange} />
      </div>
    );
  }
}

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
             onFocus={this.clearMessage} />
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

class SignUp extends Component {
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
      'GetSMS': !this.state.getCaptcha,
      'Waiting': this.state.getCaptcha
    });
    let btnCall = classNames({
      btn: true,
      'GetCall': !this.state.getCaptcha,
      'Waiting': this.state.getCaptcha
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

class Sign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: "signup"
    };
  }

  render() {
    let state = this.state.action === "signup";
    let switchText = state ? "已有账号？" : "没有账号？";
    let btnText = state ? "登录" : "注册";
    return (
      <div className="SignContainer">
        <div className="SignFlowHeader">
          <svg viewBox="0 0 200 91" className="Logo">
            <g fill="#0084ff">
              <path d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z">
              </path>
            </g>
          </svg>
          <div className="Slogan">
            <p>登录知乎，发现更大的世界</p>
          </div>
        </div>
        <form>
        {state ? (
          <SignUp />
        ) : (
          <Signin />
        )}
        </form>
        <div className="SignContainer-switch">
          {switchText}
          <button className="btn" style={{outline: "none"}} onClick={() => this.setState({action: state ? "signin" : "signup"})}>{btnText}</button>
        </div>
        <div className={this.props.QRCodePage}>
          <div className="QRCode"></div>
        </div>
      </div>
    );
  }
}

function Download(props) {
  return(
    <div className={props.className}>
      <button className={props.btnClassName} style={{outline: "none"}} onClick={props.onClick}>{props.text}</button>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      QRCode: 'close'
    };
  }

  showQRCode = (event) => {
    this.setState({QRCode: (this.state.QRCode === 'close') ? 'open' : 'close'});
  }

  render() {
    let btnClassName = classNames({
      btn: true,
      Open: (this.state.QRCode === 'close') ? true : false
    });
    let text = (this.state.QRCode === 'close') ? '下载知乎 App' : '关闭二维码';
    let QRCodePage = classNames({
      QRCodePage: true,
      Open: (this.state.QRCode === 'close') ? false : true
    });
    return(
      <div className={this.props.className}>
        <div className="Container">
          <Sign className="Sign" QRCodePage={QRCodePage} />
          <Download className="Download" btnClassName={btnClassName} onClick={this.showQRCode} text={text} />
        </div>
      </div>
    );
  }
}

export default App;
