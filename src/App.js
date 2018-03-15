import React, { Component } from 'react';
import './App.css';
import classNames from 'classnames';
import Download from './component/Download';
import Sign from './component/Sign';

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
