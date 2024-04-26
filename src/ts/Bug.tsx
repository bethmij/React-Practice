import {useState} from "react";
import {produce} from "immer";


export default function Bug() {const [bugs, setBugs] = useState([
        {id: 1, title: "Bug 1", state: "Not Fixed"},
        {id: 2, title: "Bug 2", state: "Not Fixed"}
    ])

    const settingFix = () => {
        setBugs(produce(draft => {
                const bug = draft.find(bugs => bugs.id === 1);
                if (bug) bug.state = "Fixed"
            }
        ))
    }


    return (<>
        {bugs.map(bug => <p key={bug.id}> {bug.title} {bug.state}</p>)}
        <button onClick={settingFix}>My Button</button>
    </>)

}