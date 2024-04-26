import {useState} from "react";

export default function Pizza() {
    const [pizzas, setPizzas] = useState({
        name:"Spicy Peperoni",
        topping: ['Mushroom']
    })

    const settingTopping = () => {
        setPizzas({...pizzas,
            topping: [...pizzas.topping, "Cheese"] }
        )
    }

    return(
        <>
            {pizzas.name} {pizzas.topping}
            <button onClick={settingTopping}>My Button</button>
        </>
    )
}