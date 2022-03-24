import React, { useState } from 'react'

// Theme
import GlobalStyle from './theme/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './theme/themes'

// Components
import Landing from './pages/Landing'
import ThemeButton from './components/ThemeButton'

const App = () => {
  const [theme, setTheme] = useState(lightTheme)

  const handleTheme = () => {
    theme.name === 'light' ? setTheme(darkTheme) : setTheme(lightTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ThemeButton handleTheme={handleTheme} />
      <Landing />
    </ThemeProvider>
  )
}

export default App
