import React from 'react'
import data from '../data'

import Feature from './Feature'

const Features = () => {
  return (
    <>
      {
        data.features.map((feature, i) => (
          <Feature key={feature.title} feature={feature} odd={i % 2 !== 0} />
        ))
      }
    </>
  )
}

export default Features
