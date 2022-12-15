import React from 'react'
import Container from '@material-ui/core/Container'
import { ImageWithText, Title } from './PageFragments'
import { gradient } from '../utils/calculateGradient'
import testImg from '../assets/test.jpg'
import testLogo from '../assets/test_logo.png'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'

const Home = (): JSX.Element => {
  const [t] = useTranslation('common')
  return (
    <Box>
      <Container>
      <ImageWithText
          projectImage={testImg}
          background={gradient('rgba(0,0,0,0)', 'rgba(0,0,0,0)')}
          titleLogoText={{
            title: 'Hi there, my name is Philippe!',
            text: "I'm a software developer based in Kelowna, and  I create high-performance software with the newest technologies."
          }}
        />
        <Title>Projects</Title> {/* todo translation */}
        <ImageWithText
          projectImage={testImg}
          background={gradient('rgba(0,111,255,0)', 'rgba(9,9,121,0.4)')}
          titleLogoText={{
            title: t('imageWithText.project1.title'),
            logo: testLogo,
            text: t('imageWithText.project1.text')
          }}
        />
        <ImageWithText
          projectImage={testImg}
          background={gradient('rgba(0,111,255,0.3)', 'rgb(121,71,9,0.8)')}
          titleLogoText={{
            title: t('imageWithText.project2.title'),
            logo: testLogo,
            text: t('imageWithText.project2.text')
          }}
        />
      </Container>
    </Box>
  )
}

export default Home
