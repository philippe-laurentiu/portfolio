import React from 'react'
import Container from '@material-ui/core/Container'
import { ImageWithText, Title } from './PageFragments'

const Home = (): JSX.Element => {
  return (
    <div>
      <Container>
        <Title></Title>
        <ImageWithText bgcolor='black'></ImageWithText>
        <ImageWithText bgcolor='blue'></ImageWithText>
      </Container>
    </div>
  )
}

export default Home
