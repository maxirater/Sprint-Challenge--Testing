import React from "react"

export default function Display(props) {
    return (
        <div>
                <div>
                    <h3>{`Title: ${props.game.title}`}</h3>
                    <h3>{`Genre: ${props.game.genre}`}</h3>
                    <button onClick={() => {props.deleteGame(props.id)}}>Delete</button>
                </div>
        </div>
    )
}