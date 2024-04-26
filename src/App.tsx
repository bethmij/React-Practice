// import Message from "./Message.tsx";
// import Button1 from "./Button1.tsx";
// import Alert1 from "./Alert1.tsx";
// import {useState} from "react";
// import Bug from "./Bug.tsx";
// import Game from "./Game.tsx";
// import Pizza from "./Pizza.tsx";
// import Expandable from "./Expandable.tsx";
// import Form from "./ts/Form.tsx";

// import { Button } from "@/components/ui/button"

import ExpenseTable from "@/expense-tracker/expenseTable.tsx";






// const listName = ["one", "two", "three", "four", "five"]

// const handleItem = () => {
//     console.log(item)
// }





export default function App() {

    // const [alertVisible, setAlertVisibility] = useState(false)
    const items = [
        {id:1, description:"aaa", amount:10, category:"utilities"},
        {id:2, description:"bbb", amount:10, category:"utilities"},
        {id:3, description:"ccc", amount:10, category:"utilities"},
        {id:4, description:"ddd", amount:10, category:"utilities"}
    ]

    return (
        <>

            {/*<IoHome color={"red"} size={40}/>*/}
            {/*<div><Message items={listName} heading="Cities" onSelectItem={handleItem}></Message></div>*/}
            {/*{alertVisible && <Alert1 onClick={() =>setAlertVisibility(false)}><strong>Holy guacamole!</strong> You should check in on some of those fields below.</Alert1>}*/}
            {/*<Button1 onClick = {() => setAlertVisibility(true)} >My Button1</Button1>*/}
            {/*<Button1></Button1>*/}
            {/*<Bug></Bug>*/}
            {/*<Game></Game>*/}
            {/*<Pizza></Pizza>*/}
            {/*<Expandable maxChar={400} >*/}
            {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores aspernatur assumenda*/}
            {/*    consequuntur dolorum eius, error et excepturi impedit incidunt laborum modi natus nisi optio porro*/}
            {/*    possimus quidem quod ratione rerum sed sit, veniam voluptas voluptatum! Delectus ex illum iure*/}
            {/*    laboriosam quasi reprehenderit repudiandae temporibus? Adipisci ducimus eius incidunt magnam optio quas*/}
            {/*    reiciendis, voluptatum. Adipisci consequuntur cumque eligendi illo in, inventore iusto laboriosam libero*/}
            {/*    placeat quas, quo ratione saepe voluptates! Commodi deserunt ea eius, ex laboriosam magni modi nobis*/}
            {/*    odio quaerat suscipit tenetur vel voluptas voluptate? Alias, aliquid animi atque iste natus nesciunt*/}
            {/*    repudiandae sequi tempore. Dolorem laboriosam optio veniam?*/}
            {/*</Expandable>*/}
            {/*<Form></Form>*/}
            {/*<Button variant={"outline"} className={"btn btn-outline-danger"}>Click Me</Button>*/}
            <ExpenseTable items={items}></ExpenseTable>
            {/*<button>Click me</button>*/}
        </>
    )
}