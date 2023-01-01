import React from 'react'
import Container from '@material-ui/core/Container'
import { ImageWithText, Title } from './PageFragments'
import { gradient } from '../utils/calculateGradient'
import Box from '@mui/material/Box'
import { useAutoTranslation } from '../hooks/useAutoTranslation'
import wspLogo from '../assets/projects/wsp/logos/wsp_logo.svg'
import wspCover from '../assets/projects/wsp/wsp_cover.jpg'
// import wspNet from '../assets/projects/wsp/wsp_net.jpg'
import testImg from '../assets/test.jpg'
// import testLogo from '../assets/test_logo.png'

const Home = (): JSX.Element => {
  const [at] = useAutoTranslation()
  return (
    <Box>
      <Container>
        <ImageWithText
            height={250}
            projectImage={testImg}
            background={gradient('rgba(0,0,0,0)', 'rgba(0,0,0,0)')}
            titleLogoText={{
              title: at('Hi there, my name is Philippe!'),
              text: at("I'm a software developer based in Kelowna, and  I create high-performance software with the newest technologies.")
            }}
          />
          <Title variant='h3'>{at('Projects')}</Title>
          <ImageWithText
            height={250}
            projectImage={wspCover}
            // background={gradient('rgba(214,216,215,0)', 'rgba(40,96,147,1)')}
            // background={gradient('rgba(210,214,215,1) 40%', 'rgba(89,151,255,1) 100%')}
            background={gradient('rgba(210,214,215,0) 40%', 'rgba(254,193,91,0.3) 100%')}
            titleLogoText={{
              title: at('Wirtschafts service portal'),
              logo: wspLogo,
              text: at('The Economic Service Portal.NRW is the central digital gateway for the economy in NRW.')
            }}
          />
          {/* <ImageWithText
            projectImage={testImg}
            background={gradient('rgba(0,111,255,0.3)', 'rgb(121,71,9,0.8)')}
            titleLogoText={{
              title: at('todo'),
              logo: testLogo,
              text: at('todo')
            }}
        /> */}
        <Box height='60px'></Box>
      </Container>
    </Box>
  )
}

export default Home
