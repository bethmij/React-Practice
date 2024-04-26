import {IoIosHeartEmpty} from "react-icons/io";
// import {IoIosHeart} from "react-icons/io";

import {useState} from "react";

// interface Prop{
// color?:'primary' | 'secondary';
// children:string;
// onClick: () => void
// }
export default function Button() {

    // const [status, setStatus] = useState(false)

    // const [drink, setDrink] = useState({
    //     title: "Americano",
    //     prize: 5,
    //     address:{
    //         city:"Galle",
    //         postalCode:80000
    //     }
    // })

    const [tags, setTags] = useState(['happiness', 'cheerful'])

    const setNum = () => {
        //add
        setTags([...tags, 'thoughtful'])

        //remove
        setTags( tags.filter(tags => tags !== 'happiness'))

        //update
        setTags((tags.map(tags => tags==='happiness' ? 'happy':tags)))
        // setDrink({...drink, address: {...drink.address, postalCode: 90000}})
    }
    // return <button className={"btn btn-outline-"+color} onClick={onClick}>{children}</button>


    // if (status) {
    //     return <IoIosHeart onClick={() => setStatus(false)} size={60} color={"red"}></IoIosHeart>
    // } else {
        return (<>{tags}
            <IoIosHeartEmpty onClick={setNum} size={60}></IoIosHeartEmpty>
        </>)
    // }
}