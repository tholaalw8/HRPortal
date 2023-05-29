
import {useContext} from "react"

interface ISayName {
     userName?: string 
}

export const SayName = (props: ISayName) => {


    return (
        <>
                <h2> hi how are you  {props.userName} </h2>
        </> 
    )
}