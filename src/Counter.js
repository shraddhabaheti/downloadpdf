import React, { Component } from 'react'

export default class Counter extends Component {
componentDidUpdate(prevprops,perstate){
    if(prevprops?.number !==this?.state?.number){
        console.log("component upadate")
    }
}
render() {
    return (
       <div>Counter
         <h1>{this?.props?.number}</h1>
      </div>
    )
  }
}
