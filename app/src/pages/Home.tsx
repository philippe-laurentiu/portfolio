import React from 'react'
import Container from '@material-ui/core/Container'
import { ImageWithText, Title } from './PageFragments'
import { gradient } from '../utils/calculateGradient'
import testImg from '../assets/test.jpg'
import testLogo from '../assets/test_logo.png'
// import testLogo from '../assets/test_logo.png'

const Home = (): JSX.Element => {
  return (
    <div>
      <Container>
        <Title></Title>
        <ImageWithText
          projectImage={testImg}
          background={gradient('rgba(0,111,255,0)', 'rgba(9,9,121,0.4)')}
          titleLogoText={{
            title: 'test title',
            logo: testLogo,
            text: 'test description for a project'
          }}
        />
        <ImageWithText
          projectImage={testImg}
          background={gradient('rgba(0,111,255,0.3)', 'rgb(121,71,9,0.8)')}
          titleLogoText={{
            title: 'test title',
            logo: testLogo,
            text: 'test description for a project'
          }}
        />
      </Container>
    </div>
  )
}

export default Home
