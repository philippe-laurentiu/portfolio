import React from 'react'
import Typography from '@material-ui/core/Typography'
import testImg from '../assets/test.jpg'

export const TestImage = (): JSX.Element => {
  return (
        <img src={testImg} alt='test image' className='image'/>
  )
}

export const TestText = (): JSX.Element => {
  return (
        <Typography>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        </Typography>
  )
}
