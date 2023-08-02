import React, { useState } from 'react'
export const Reg = ()=> {
    const [form,setForm]=useState({
        name:'',
        email:''
    })
    const [count,setCount]=useState(0);
    const handleChange=(e)=>{
        let {name,value}=e.target
        setForm({
            ...form,
            [name]:value
        })
    }
    const onSubmit=(e)=>{
        e.preventDefault()
       setForm(form)
      
    }
    console.log(form,"dcfd")
    const countInc=()=>{
        setCount(count+1)
    }
   const isEven=()=>{
       return count % 2 === 0
   }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <label>name</label>
            <input type="text" name="name" placeholder='name' value={form?.name} onChange={handleChange}/>
            <label>eamil</label>
            <input type="text" name="email" placeholder='email' value={form?.email} onChange={handleChange}/>
            <button type="submit">click</button>
             <h1>{count}{isEven()?'even':"odd"}</h1>
             <button onClick={countInc}>counti</button>
        </form>
    </div>
  )
}

export default Reg
