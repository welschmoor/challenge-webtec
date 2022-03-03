

// npm test -- src/components/Navbar.test.js
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Navbar from './Navbar'
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "../STYLE/styleGLOBAL"
import { BrowserRouter } from "react-router-dom"


import { mountWithTheme, shallowWithTheme } from "../test/testUtils"

describe('some tests', () => {
  test('renders content', () => {
    const { container } = render(
      <BrowserRouter>
        <ThemeProvider theme={lightTheme}>
          <Navbar />
        </ThemeProvider>
      </BrowserRouter>
    )
    expect(container).toHaveTextContent("About")
  })
})