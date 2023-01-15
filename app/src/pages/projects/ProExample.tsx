import React from 'react'
import { ImageWithText, TwoBoxes, Title, Technology } from '../../components/PageFragments'
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
          height={100}
          background={`url(${wspIhkHeader})`}
          titleLogoText={{
            title: at('Economic service portal')
          }}
        />
        <Box paddingTop={'50px'}>
          <Title variant='h4'>{at('Project purpose')}</Title>
        </Box>
        <ImageWithText
          height={450}
          projectImage={wspWebsite}
          background={"gradient('rgba(0,0,0,0)', 'rgba(0,0,0,0)')"}
          titleLogoText={{
            title: at('Economic service portal'),
            text: at(
              'The Economic Service Portal.NRW is the central digital gateway for the economy in NRW.'
            )
          }}
        />
        <Box paddingTop={'50px'}>
          <Title variant='h4'>{at('Technologies used')}</Title>
        </Box>
        <TwoBoxes orderDe={[1, 0]} orderMo={[0, 1]}>
          <Technology
            technologies={[
              'react'
            ]}
          ></Technology>
          <Technology technologies={['c']}></Technology>
        </TwoBoxes>
      </Container>
    </Box>
  )
}

export default ProExampel
