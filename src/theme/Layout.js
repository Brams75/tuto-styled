import React from 'react'
import styled from 'styled-components'

const Layout = ({ className, children }) => {
  return (
    <div className={className}>
      <div className='content'>
        {children}
      </div>
    </div>
  )
}

export default styled(Layout)`
max-width: 1200px;
.content {
  max-width: 1170px;
  margin: 0 auto;
}
`
