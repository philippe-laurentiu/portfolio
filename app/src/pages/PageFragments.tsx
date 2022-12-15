import React from 'react'
import { ImageWithTextFragment, ImageWithTextInterface } from './pagefragments/ImageWithTextfragment'
import { TitleFragment, Props } from './pagefragments/TitleFragment'

export const ImageWithText = (props: ImageWithTextInterface): JSX.Element => {
  return <ImageWithTextFragment {...props} />
}

export const Title = (props: Props): JSX.Element => {
  return <TitleFragment {...props}></TitleFragment>
}
