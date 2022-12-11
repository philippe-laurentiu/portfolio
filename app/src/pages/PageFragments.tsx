import React from 'react'
import { ImageWithTextFragment, ImageWithTextInterface } from './pagefragments/ImageWithTextfragment'
import TitleFragment from './pagefragments/TitleFragment'

export const ImageWithText = ({ bgcolor }: ImageWithTextInterface): JSX.Element => {
  return <ImageWithTextFragment bgcolor={bgcolor} />
}

export const Title = (): JSX.Element => {
  return <TitleFragment></TitleFragment>
}
