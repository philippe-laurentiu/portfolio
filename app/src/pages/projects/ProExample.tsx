import React from 'react'
import { ImageWithText, Title, TwoBoxes, Technology } from '../PageFragments'
// import testImg from '../../assets/test.jpg'
// import { gradient } from '../../utils/calculateGradient'
import Container from '@material-ui/core/Container' // todo @material-ui is not @mui/material
import Box from '@mui/material/Box'
import { useAutoTranslation } from '../../hooks/useAutoTranslation'
import wspIhkHeader from '../../assets/projects/wsp/wsp_ihk_header.png'
import wspWebsite from '../../assets/projects/wsp/wsp_website.png'

const ProExampel = (): JSX.Element => {
  const [at] = useAutoTranslation()

  return (
    <Box>
      <Container>
        <ImageWithText
            background={`url(${wspIhkHeader})`}
            titleLogoText={{
              title: at('Economic service portal')
            }}
          />
        <Title>{at('Projects')}</Title>
        <ImageWithText
            projectImage={wspWebsite}
            background={"gradient('rgba(0,0,0,0)', 'rgba(0,0,0,0)')"}
            titleLogoText={{
              title: at('Economic service portal'),
              text: at('The Economic Service Portal.NRW is the central digital gateway for the economy in NRW.')
            }}
          />
        <TwoBoxes>
            <Technology></Technology>
            <Technology></Technology>
        </TwoBoxes>
      </Container>
    </Box>
  )
}

export default ProExampel
