import React from 'react'
import styled from 'styled-components'

import { layout, pxToRem, media } from '../theme/helpers'

import Title from '../theme/Title'

const Feature = ({ className, feature, odd }) => {
  return (
    <div className={className}>
      <div className='content'>
        <Title>{feature.title}</Title>
        <p>{feature.text}</p>
      </div>
      <img className={odd ? 'odd' : ''} src={feature.img} alt={feature.title} />
    </div>
  )
}

export default styled(Feature)`
  ${layout()};
  text-align: center;
  * {
    margin: ${pxToRem(24)} ${pxToRem(8)};
  }
  img {
    max-height: 30vh;
  }

  ${media.small`
    text-align: left;
    img {
      max-height: 70vh;
    }
    display: flex;
    align-items: center;
    .odd {
      order: -1;
    }
  `};
`
