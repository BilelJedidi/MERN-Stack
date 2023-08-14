import React from 'react'
import { useState } from 'react'

const Form = (props) => {
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")
    
    return (
    <div>
        <form>
            First Name: <input onChange={(e)=>setFirstName(e.target.value)}/>
        </form>
        <form>
            Last Name: <input onChange={(e)=>setLastName(e.target.value)}/>
        </form>
        <form>
            Email: <input onChange={(e)=>setEmail(e.target.value)}/>
        </form>
        <form>
            Password: <input type='password' onChange={(e)=>setPassword(e.target.value)}/>
        </form>
        <form>
            Confirm Password: <input type="password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
        </form>
        <div>
            <h2>Your form data</h2>
            <p>First Name: {FirstName}</p>
            <p>Last Name: {LastName}</p>
            <p>Email: {Email}</p>
            <p>Password: {Password}</p>
            <p>Confirm Password: {ConfirmPassword}</p>
        </div>
    </div>
    )
}

export default Form