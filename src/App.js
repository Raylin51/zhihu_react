import React, { Component } from 'react';
import './App.css';
import Download from './component//Download/Download';
import Sign from './component//Sign/Sign';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            QRCode: 'close'
        };
    }

    render() {
        return(
            <div className={this.props.className}>
                <div className="Container">
                    <Sign className="Sign" />
                    <Download />
                </div>
            </div>
        );
    }
}

export default App;
