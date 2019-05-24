import React from "react"
// import axios from "axios"

class GameForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            genre: ""
        }
    }

    submitGame = e => {
        e.preventDefault()
        const oneGame = { title: this.state.title, genre: this.state.genre }
        this.props.addGame(oneGame)
        this.setState({ title: "", genre: "" })
    }

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitGame}>
                    <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleInput}
                        placeholder="title"
                    />
                    <input
                        type="text"
                        name="genre"
                        value={this.state.genre}
                        onChange={this.handleInput}
                        placeholder="genre"
                    />
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

export default GameForm
