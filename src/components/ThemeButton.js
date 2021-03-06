import React, { useState } from 'react'
import styled from 'styled-components'

import { colors, pxToRem } from '../theme/helpers'

const ThemeButton = ({ className, handleTheme }) => {
  const [theme, setTheme] = useState('π')

  const handleClick = () => {
    handleTheme()
    theme === 'π' ? setTheme('βοΈ') : setTheme('π')
  }

  return (
    <button onClick={handleClick} className={className}>
      <span role='img' aria-label='ThΓ¨me'>{theme}</span>
    </button>
  )
}

export default styled(ThemeButton)`
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${colors.accent};
  border-radius: 50%;
  border: 0;
  font-size: ${pxToRem(24)};
  cursor: pointer;
  margin: ${pxToRem(8)};
`
