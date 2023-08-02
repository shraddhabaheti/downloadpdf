// import e from "express";
import { useState } from "react";
import './App.css'
import Marquee from "react-fast-marquee";
function Login(){
    const [state,setState]=useState({
        name:"",
        email:"",
    })
    const handleChange=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setState({
            ...state,
            [name]:e.target.value
        })
    }
    console.log(state)
  
    const onSubmit=(e)=>{
         e.preventDefault();
      setState(state)
    }
    return(
        <div style={{userSelect: "none" }} onCopy={(e)=>{e.preventDefault()}}>
            <h1>Login From Design</h1>
            <form onSubmit={onSubmit} >
                <label >name</label>
                <input type="text" name="name" onChange={handleChange}/>
                <label>email</label>
                <input type="text" name="email" onChange={handleChange}/>
                <div>
                    <Marquee><p>Hello i am shraddha Baheti</p></Marquee>
                </div>
                <marquee><p>text</p></marquee>
                <button  type="submit">Submit</button>
                
            </form>
        </div>
    )
}
export default Login;