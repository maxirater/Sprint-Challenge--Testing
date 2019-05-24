import React from "react"
import { render, cleanup } from "react-testing-library"
import "jest-dom/extend-expect"

import Game from "./Game"

describe("<Game />", () => {
    it('it should render a Game component', () => {
        const { getByText } = render(<Game />)

        getByText(/Title:/i)

        cleanup()
    })
})