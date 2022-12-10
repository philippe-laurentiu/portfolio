import React from 'react'
import Container from '@material-ui/core/Container'
import { imageWithText } from './PageFragments'

const Home = (): JSX.Element => {
  return (
    <div>
      <Container>
        {imageWithText({
          bgcolor: 'black'
        })}
        {imageWithText({
          bgcolor: 'blue'
        })}
      </Container>
    </div>
  )
}

export default Home
