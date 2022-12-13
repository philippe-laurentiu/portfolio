import React from 'react'
import { ImageWithTextFragment, ImageWithTextInterface } from './pagefragments/ImageWithTextfragment'
import TitleFragment from './pagefragments/TitleFragment'

export const ImageWithText = (props: ImageWithTextInterface): JSX.Element => {
  return <ImageWithTextFragment {...props} />
}

export const Title = (): JSX.Element => {
  return <TitleFragment></TitleFragment>
}
