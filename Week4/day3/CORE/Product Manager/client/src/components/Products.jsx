import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Products = (props) => {

    const [allProducts, setAllProducts] = useState([]);

    const { refreshState } = props

    useEffect(()=>{
    axios.get("http://localhost:5000/api/product")
        .then(res => {
        console.log(res.data.allProducts)
        setAllProducts(res.data.allProducts)
        })
        .catch(err => {console.log(err)})
    },[refreshState])


    const deleteProduct = (id) => {
        axios.delete(`http://localhost:5000/api/product/${id}`)
            .then(res => {
            const changedProducts = allProducts.filter((product)=> product._id !== id)
            setAllProducts(changedProducts)
            })
            .catch(err => {console.log(err)})
    }

    return (
    <div>
        <h1>All Products: </h1>
        {allProducts.map((Product)=>{
            return <div key={Product._id}>
                <Link to={"/"+ Product._id}>{Product.title}</Link>
                <button onClick={()=>deleteProduct(Product._id)}>Delete</button>
                <br/><br/>
            </div>
        })}
    </div>
    )
}

export default Products