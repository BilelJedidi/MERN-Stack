import React from 'react'
import { useParams } from 'react-router-dom'

const Params = (props) => {
    

    const {text, color, BG} = useParams()
    return (
    <div>
        {
            isNaN(text)?
            <p style={color?
                {color: color, backgroundColor: BG}
                :null}>
                    This is a word: {text}</p>
            :
            <p>This is a number: {text}</p>
        }
    </div>
    )
}

export default Params