import React, { Component } from 'react'
import Counter from './Counter';

export default class Demo extends Component {
    constructor(){
        super();{
            this.state={
                count:0
            }
        }
    }
componentDidMount(){
    console.log("first all first component ")
}
increment(){
    this.setState({
        count:this.state.count+1
    })
}
  render() {
    return (
      <div>
          <h1>{this.state.count}</h1>
          <Counter number={this.state.count} />
        <button onClick={()=>{this.increment()}}>clickme</button>
      </div>
    )
  }
}
