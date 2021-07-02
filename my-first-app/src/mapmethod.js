import React from "react";
import "./challenge2.css";

class App extends React.Component {
    clickHandler = button => {
    console.log(button);
    };
    render() {
    const buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "x", "/"];
    return (
    <div className="container">
    {buttons.map((button, index) => {
    return <Button key={index} label={button} click={() => this.clickHandler(button)} />;
    })}
    </div>
    );
    }
    }
    const Button = props => {
    return <button onClick={props.click}>{props.label}</button>;
    };

export default App