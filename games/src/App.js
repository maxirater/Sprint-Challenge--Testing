import React from "react"
import "./App.css"

import Games from "./components/Games"
import GameForm from "./components/GameForm"

class App extends React.Component {
    state = {
        gameList: []
    }

    deleteGame = id => {
        const gameListToDelete = this.state.gameList
        gameListToDelete.splice(id,1)
        this.setState({gameList: gameListToDelete})
    }

    addGame = gameObj => {
        let gameListToAdd = this.state.gameList
        gameListToAdd.push(gameObj)
        this.setState({ gameList: gameListToAdd })
    }

    render() {
        return (
            <div>
                <GameForm addGame={this.addGame} />
                <Games gameArray={this.state.gameList} deleteGame={this.deleteGame} />
            </div>
        )
    }
}

export default App