import React from 'react'
import { ImageWithText, Title } from '../PageFragments'
import testImg from '../../assets/test.jpg'
import { gradient } from '../../utils/calculateGradient'
import Container from '@material-ui/core/Container' // todo @material-ui is not @mui/material
import Box from '@mui/material/Box'

const ProExampel = (): JSX.Element => {
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
      </Container>
    </Box>
  )
}

export default ProExampel
