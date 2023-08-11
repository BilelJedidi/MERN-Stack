import React, { useState } from "react";

const PersonCard = (props) => {
    const {firstName, lastName, hair} = props;
    const [age, SetAge] = useState(props.age)
    const increaseAge = ()=>{
        SetAge(age+1)
        console.log(age)
    }

    return (
        <div>
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hair}</p>
            <button onClick={()=> {increaseAge()} }>Birthday button for {lastName} {firstName}</button>
        </div>
    )
}

export default PersonCard