import {useState} from "react";

interface Prop{
    children: string
    maxChar?: number
}
export default function Expandable({children, maxChar=770}:Prop) {

    const [buttonText, setButtonText] = useState(false)

    if (children.length <= maxChar) return <p>{children}</p>

    const text =  (buttonText) ? children.substring(0,maxChar)+"..." : children

    return <p>{text}<button onClick={()=>setButtonText(!buttonText)}>{!buttonText ? "Less" : "More"}</button></p>

}