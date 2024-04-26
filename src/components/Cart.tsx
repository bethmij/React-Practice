// import {produce} from "immer";
import {useState} from "react";

export default function Cart() {
    const [cart, setCart] = useState({
        discount: .1,
        items: [
            {id: 1, title: "Product 1", quantity: 1},
            {id: 2, title: "Product 2", quantity: 1}
        ]
    }
)

    const settingCart = () => {
        // setBugs(produce(draft => {
        //         const bug = draft.find(bugs => bugs.id === 1);
        //         if (bug) bug.state = "Fixed"
        //     }
        // ))item.state=

        setCart({...cart, items: cart.items.map(item => item.id === 1 ? {...item, quantity:2}:item)})
        // setCart(produce(draft => {
        //     draft.find(item => items.id)
        // }))

    }


    return (<>
        {cart.items.map(item => <p key={item.id}> {item.title} {item.quantity}</p>)}
        <button onClick={settingCart}>My Button</button>
    </>)

}

