import styled from 'styled-components'

import img from '../images/hero.jpg'

const Hero = styled.div`
  min-height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${img}) center/cover fixed no-repeat;
  width: 100%;
  `

export default Hero
