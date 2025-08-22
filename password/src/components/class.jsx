import React, { Component } from "react";


class ClassHeader extends Component{
state={count:0}

increment=()=>{
    this.setState({count:this.state.count+1})
}

render()
{
    return(
        <div><p>count is {this.state.count}</p>
        <button onClick={this.state.count > 20 ? alert("cant go above 20")  :     this.increment}>increment</button>
        </div>
    )
}}

export default ClassHeader