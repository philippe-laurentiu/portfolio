import React from 'react'
import Container from '@material-ui/core/Container'
// import {
//   TwoBoxes,
//   Title,
//   Image,
//   TitleLogoText
// } from '../components/PageFragments'
// import AsymmetricImage from 'src/components/AsymmetricImage'
// import { gradient } from '../utils/calculateGradient'
import Box from '@mui/material/Box'
// import { useAutoTranslation } from '../hooks/useAutoTranslation'
// import wspLogo from '../assets/projects/wsp/logos/wsp_logo.svg'
// import wspCover from '../assets/projects/wsp/wsp_cover.jpg'
// import wspNet from '../assets/projects/wsp/wsp_net.jpg'
// import testImg from '../assets/test.jpg'
// import testLogo from '../assets/test_logo.png'

const Home = (): JSX.Element => {
  // const [at] = useAutoTranslation()

  return (
    <Box>
      <Container>

        <div>TODO Enable Two boxes</div>
        {/* <TwoBoxes
          orderDe={[1, 0]}
          orderMo={[0, 1]}
          background={gradient('rgba(0,0,0,0)', 'rgba(0,0,0,0)')}
        >
          <AsymmetricImage image={testImg} />
          <TitleLogoText
            title={at('Hi there, my name is Philippe!')}
            text={at(
              "I'm a software developer based in Kelowna, and  I create high-performance software with the newest technologies."
            )}
          ></TitleLogoText>
        </TwoBoxes>

        <Title variant='h3'>{at('Projects')}</Title>

        <TwoBoxes
          orderDe={[0, 1]}
          orderMo={[0, 1]}
          background={gradient(
            'rgba(210,214,215,0) 40%',
            'rgba(254,193,91,0.3) 100%'
          )}
        >
          <Image
            height={250}
            projectImage={wspCover}
            background={"gradient('rgba(0,0,0,0)', 'rgba(0,0,0,0)')"}
          />
          <TitleLogoText
            title={at('Wirtschafts service portal')}
            text={at(
              'The Economic Service Portal.NRW is the central digital gateway for the economy in NRW.'
            )}
          ></TitleLogoText>
        </TwoBoxes> */}

        <Box height='60px'></Box>
      </Container>
    </Box>
  )
}

export default Home
