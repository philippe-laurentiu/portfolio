import React from 'react'
import { OneBox, TwoBoxes, Title, Technology, TitleLogoText, Image } from '../../components/PageFragments'
import Container from '@material-ui/core/Container' // todo @material-ui is not @mui/material
import Box from '@mui/material/Box'
import { useAutoTranslation } from '../../hooks/useAutoTranslation'
import wspWebsite from '../../assets/projects/wsp/wsp_website.png'

const ProExampel = (): JSX.Element => {
  const [at] = useAutoTranslation()

  return (
    <Box>
      <Container>
        <OneBox background={"gradient('rgba(0,0,0,0)', 'rgba(0,0,0,0)')"}>
          <Image
            height={450}
            projectImage={wspWebsite}
            background={"gradient('rgba(0,0,0,0)', 'rgba(0,0,0,0)')"}
          />
           <TitleLogoText
            title={at('test')}
            text={at(
              'test'
            )}
          ></TitleLogoText>
        </OneBox>

        <Box paddingTop={'50px'}>
          <Title variant='h4'>{at('Project purpose')}</Title>
        </Box>

        <TwoBoxes background={'white'} orderDe={[1, 0]} orderMo={[0, 1]}>
          <Image
            height={450}
            projectImage={wspWebsite}
            background={"gradient('rgba(0,0,0,0)', 'rgba(0,0,0,0)')"}
          />
          <TitleLogoText
            title={at('Economic service portal')}
            text={at(
              'The Economic Service Portal.NRW is the central digital gateway for the economy in NRW.'
            )}
          ></TitleLogoText>
        </TwoBoxes>

        <Box paddingTop={'50px'}>
          <Title variant='h4'>{at('Technologies used')}</Title>
        </Box>

        <TwoBoxes background={'white'} orderDe={[1, 0]} orderMo={[0, 1]}>
          <Technology technologies={['c', 'react', 'docker', 'php']}></Technology>
          <Technology technologies={['react']}></Technology>
        </TwoBoxes>
      </Container>
    </Box>
  )
}

export default ProExampel
