import React from 'react'
import { ThemeProvider } from 'styled-components'
import ResetStyles from './elements/ResetStyles.js'
import General from './elements/General.js'
import ThemeContext from '../GlobalContexts/ThemeContext.js'
import defaultTheme from './themes/defaultTheme'

const StylesProvider = ({children}) => {
  const {theme, } = React.useContext(ThemeContext)
  return (
    <ThemeProvider theme={theme || defaultTheme}> 
      <ResetStyles/>
      <General/>{/* General must be last, as it delivers theme.css */}
      {children}
    </ThemeProvider>
  )
}

export default StylesProvider