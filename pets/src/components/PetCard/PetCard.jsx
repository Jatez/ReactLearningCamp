import { useState } from 'react'
import classes from './PetCard.module.css'
const kindMap = {
    "dog": "🐶",
    "cat": "😺",
    "wolf": "🐺"
}
export const PetCard = ({name, breed, age, kind}) => {
    
    const [like, setLike] = useState(false)

    return(
        <div className={classes.card}>
            <h3>{name}</h3>
            <p>Age: {age}</p> 
            <p>Kind: {kindMap[kind.toLowerCase()] ?? kind}</p>
            <p>Breed: {breed}</p>
            <button className={classes.button} style={{color:like? "red" : "white"}} onClick={() => setLike(!like)}>♥️</button>
        </div>
    )
}

export default PetCard