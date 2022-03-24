import React from 'react'
import styled from 'styled-components'
import { pxToRem } from '../theme/helpers'

const Title = ({ className, children }) => (
  <h3 className={`${className} bolder`}>{children}</h3>
)

export default styled(Title)`
  font-size: ${pxToRem(24)};
  color: ${props => props.theme.titleColor}
`
