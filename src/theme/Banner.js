import React from 'react'
import styled from 'styled-components'
import { colors, pxToRem } from './helpers'

const Banner = ({ className, children }) => {
  return (
    <div className={className}>
      <p>{children}</p>
    </div>
  )
}

export default styled(Banner)`
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: ${pxToRem(2)};
  text-align: center;
  text-transform: capitalize;
  font-weight: 700;
`
