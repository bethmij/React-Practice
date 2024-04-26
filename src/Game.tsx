import {useState} from "react";

export default function Game() {
    const [game, setGame] = useState({
        id:1,
        player:{
            name:"John"
        }
    })

    const setName = () => {
        setGame({...game, player: {...game.player, name: "Beth"}})
    }

    return(
        <>
            {game.id} {game.player.name}
            <button onClick={setName}>My Button</button>
        </>
    )
}