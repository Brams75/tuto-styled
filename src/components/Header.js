import React from 'react'
import styled from 'styled-components'
import { colors, layout, media } from '../theme/helpers'

const Header = ({ className }) => {
  return (
    <header className={className}>
      <div className='content'>
        <h1>HostCoders</h1>
        <div className='support'>
          <p>Support 24/7/365</p>
          <p>Appel Gratuit : <span className='phone-number'>3615</span></p>
        </div>
      </div>

    </header>

  )
}

export default styled(Header)`
  border-bottom: 4px solid ${colors.primary};
  text-align: center;
  .content {
    ${layout()}
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(292px,1fr));
    align-items: center;

  }
  h1 {
    color: ${colors.accent};
    font-weight: 900;
  }
  .phone-number {
    color: ${colors.accent};
    font-weight: 700;
  }
  ${media.small`
  h1 {
    text-align: left;
  }
  .support {
    text-align: right;
  }
  `};

`
