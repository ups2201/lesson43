import React from "react";

//схлопывающийся блок (может сворачиваться в заголовок или показывать контент)
export class AccordionComponent extends React.Component< { title: string, text: string }, {isToggleOn: boolean}> {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <p onClick={this.handleClick} className="accordionComponent">
                <b>{this.props.title}</b>
                <br/>
                <span hidden={this.state.isToggleOn}>{this.props.text}</span>
            </p>
        );
    }
}
