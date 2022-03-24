import React from 'react'
import styled from 'styled-components'
import { colors, pxToRem } from '../theme/helpers'

import { lighten } from 'polished'

const Button = ({ className }) => {
  return (
    <button className={`${className} bold`}>
      Commander !
    </button>
  )
}

export default styled(Button)`
  background: ${colors.accent};
  border-radius: 4px;
  color: ${colors.white};
  margin: ${pxToRem(16)};
  cursor: pointer;
  padding: ${pxToRem(16)};
  transition: 200ms;
  &:hover {
    background: ${lighten(0.08, colors.accent)};
  }
`
