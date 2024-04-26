import {useState} from "react";

interface MessageProp {
    items: string[]
    heading: string
    onSelectItem: (item: string) => void
}

export default function Message({items, heading, onSelectItem}: MessageProp) {


    // const selectedIndex = 1;
    const [selectedItem, setSelectedItem] = useState(-1)

    const getMessage = () => {
        return items.length > 0 && items.map((name, index) => <li
            className={index === selectedItem ? "list-group-item active" : "list-group-item"} key={index}
            onClick={
                () => {
                    setSelectedItem(index);
                    onSelectItem(name);
                }}>{name}</li>)
    }

    // const handleEvent = (event: MouseEvent) => {
    //     console.log(event)
    // }


    return (
        <>
            <h1>{heading}</h1>
            <ul className="list-group">
                {getMessage()}
            </ul>
        </>
    )
}