import React from "react"

import Game from './Game'

export default function Display(props) {
    return (
        <div>
            {props.gameArray.map((game, id) => (
                <div>
                    <Game game={game} id={id} deleteGame={props.deleteGame} />
                </div>
            ))}
        </div>
    )
}