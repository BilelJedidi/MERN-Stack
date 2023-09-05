import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Details = () => {
    const [oneProduct, SetOneProduct] = useState({})

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/product/${id}`)
            .then((res)=> {
                console.log(res.data)
                SetOneProduct(res.data.oneProduct)
            })
            .catch(err => console.log(err))
    },[id])

    const deleteProduct = (id) => {
      axios.delete(`http://localhost:5000/api/product/${id}`)
          .then(res => {
          navigate("/")
          })
          .catch(err => {console.log(err)})
  }
  return (
    <div>
        <h3>{oneProduct.title}</h3>
        <p>Price: ${oneProduct.price}</p>
        <p>Description: {oneProduct.description}</p>
        <button onClick={()=>deleteProduct(oneProduct._id )}>Delete</button>
    </div>
  )
}

export default Details