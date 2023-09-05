import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const [ProductTitle, setProductTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("")

    const  navigate = useNavigate()

    const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/product/${id}`)
            .then((res)=> {
                console.log(res.data)
                const { title, price, description } = res.data.oneProduct
                setProductTitle(title)
                setPrice(price)
                setDescription(description)
            })
            .catch(err => console.log(err))
    },[id])


    const onUpdateHandler = (e) => {
        e.preventDefault()
        const newProduct = {
            title: ProductTitle,
            price,
            description
        }
        axios.put(`http://localhost:5000/api/product/${id}`,newProduct)
            .then(res => {
            console.log("your product is updated successfully")
            navigate("/")
            })
            .catch(err => {
            console.log(err)
            })
        }

  return (
    <div>
        <h1>Update Product</h1>
        <form onSubmit={onUpdateHandler}>
        Title: <input onChange={(e)=>setProductTitle(e.target.value)} value={ProductTitle}/>
        Price: <input onChange={(e)=>setPrice(e.target.value)} value={price}/>
        Description: <input onChange={(e)=>setDescription(e.target.value)} value={description}/>
        <button>Update</button>
        </form>
    </div>
  )
}

export default Update