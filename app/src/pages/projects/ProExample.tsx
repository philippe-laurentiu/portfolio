import React from 'react'
import { ImageWithText, Title, TwoBoxes, Technology } from '../PageFragments'
import testImg from '../../assets/test.jpg'
import { gradient } from '../../utils/calculateGradient'
import Container from '@material-ui/core/Container' // todo @material-ui is not @mui/material
import Box from '@mui/material/Box'
import { useAutoTranslation } from '../../hooks/useAutoTranslation'

const ProExampel = (): JSX.Element => {
  const [at] = useAutoTranslation()

  return (
    <Box>
      <Container>
        <ImageWithText
            projectImage={testImg}
            background={gradient('rgba(0,0,0,0)', 'rgba(0,0,0,0)')}
            titleLogoText={{
              title: at('Hi there, my name is Philippe!'),
              text: "I'm a software developer based in Kelowna, and  I create high-performance software with the newest technologies."
            }}
          />
        <Title>{at('Projects')}</Title>
        <TwoBoxes>
            <Technology></Technology>
            <Technology></Technology>
        </TwoBoxes>
      </Container>
    </Box>
  )
}

export default ProExampel
