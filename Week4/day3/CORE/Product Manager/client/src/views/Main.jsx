import React, { useState } from 'react'
import Form from "../components/Form"
import Products from '../components/Products'

const Main = () => {
    const [refreshState, setRefreshState] = useState(false)

    const refresh = () => {
        setRefreshState(!refreshState)
    }

  return (
    <div>
        <Form refresh = {refresh}/>
        <br/> <hr/>
        <Products refreshState= {refreshState}/>
    </div>
  )
}

export default Main