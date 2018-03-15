import React, { Component } from 'react';
import './Input.css';

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

export default Input;
