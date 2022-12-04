import React from "react";
import "./Sem2.css";

export function HelloWorld(props) {
  
    return <h1>Hello {props.name} {props.fname}!</h1>;
    
}

export function GoodbyeWorld(props) {
  
    return <h1>Goodbye, world!</h1>;
    
}

export class HelloWorldClass extends React.Component {
  
    constructor() {
        super();
        this.state = {
            what: "Goodbye",
            pressCount: 0
        };
        this.updateMessage = this.updateMessage.bind(this);
        this.resetCount = this.resetCount.bind(this);
    }

    updateMessage() {
        this.setState({
            what: this.state.what === "Hello" ? "Goodbye" : "Hello",
            pressCount: this.state.pressCount + 1
        });
    } 

    resetCount() {
        this.setState({
            pressCount: 0
        });
    }

    render() {
        return<>
            <div className="sem2">
                <h1>{this.state.what}, {this.props.who}!</h1>
                <h2>Button pressed {this.state.pressCount} times</h2>
                <button onClick={this.updateMessage}>Click me!</button>
                <button onClick={this.resetCount}>Reset count!</button>
            </div>   
        </>
    }
    
}
