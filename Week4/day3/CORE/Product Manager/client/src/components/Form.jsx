import axios from 'axios';
import React, { useState } from 'react'

const Form = (props) => {

    const [ProductTitle, setProductTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("")

    const { refresh } = props


    const onSubmitHandler = (e) => {
        e.preventDefault()
        const newProduct = {
            title: ProductTitle,
            price,
            description
        }
        axios.post("http://localhost:5000/api/product",newProduct)
            .then(res => {
            console.log("your product is added successfully")
            refresh()
            setProductTitle("")
            setPrice(0)
            setDescription("")
            })
            .catch(err => {
            console.log(err)
            })
        }
    
    
    return (
    <div>
        <h1>Product Manager</h1>
        <form onSubmit={onSubmitHandler}>
        Title: <input onChange={(e)=>setProductTitle(e.target.value)}/>
        Price: <input onChange={(e)=>setPrice(e.target.value)}/>
        Description: <input onChange={(e)=>setDescription(e.target.value)}/>
        <button>Create</button>
        </form>
    </div>
    )
}

export default Form