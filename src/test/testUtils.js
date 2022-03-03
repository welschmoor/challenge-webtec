import React from 'react'
import { ThemeProvider } from 'styled-components'
import { mount, shallow } from 'enzyme'

import { lightTheme } from '../STYLE/styleGLOBAL'


const ThemeProviderWrapper = ({ children }) => (
  <ThemeProvider theme={lightTheme}>
    {children}
  </ThemeProvider>
)

export const shallowWithTheme = tree => shallow(tree, {
  wrappingComponent: ThemeProviderWrapper
})

export const mountWithTheme = tree => mount(tree, {
  wrappingComponent: ThemeProviderWrapper
})
