import { createGlobalStyle } from 'styled-components'
import { colors } from './helpers'

// CSS
import 'sanitize.css'
import 'sanitize.css/forms.css'
import 'sanitize.css/typography.css'

const Globals = createGlobalStyle`
  ::selection {
    background: ${colors.primary};
  }
  body {
    ${props => `color:${props.theme.frontColor}`};
    ${props => `background:${props.theme.backgroundColor}`};
    font-size: 16px;
    transition: 600ms;
  }

  .bolder {
    font-weight: 900;
  }
  .bold {
    font-weight: 700;
  }
  .accent {
    color: ${colors.accent};
  }
`

export default Globals
