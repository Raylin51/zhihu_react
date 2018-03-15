import React, { Component } from 'react';
import './Download.css';
import classNames from 'classnames';

class Download extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showQRCode: false
        }
    }

    showQRCode = (event) => {
        this.setState({
            showQRCode: !this.state.showQRCode
        });
    }

    render() {
        let btnClassName = classNames({
            btn: true,
            // Open: !this.state.showQRCode
        });
        let text = this.state.showQRCode ? '关闭二维码' : '下载知乎 App';
        let QRCodePage = classNames({
            QRCodePage: true,
            Open: this.state.showQRCode
        });
        return(
            <div className="Download">
                <button
                  className={btnClassName}
                  style={{outline: "none"}}
                  onClick={this.showQRCode}>
                  {text}
                </button>
                <div className={QRCodePage}>
                    <div className="QRCode"></div>
                </div>
            </div>
        );
    }
}

export default Download;
