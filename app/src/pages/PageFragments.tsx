import React from 'react'
import { ImageWithTextFragment, ImageWithTextInterface } from './pagefragments/ImageWithTextfragment'
import { TitleFragment, Props } from './pagefragments/TitleFragment'
import { TwoBoxesFragment } from './pagefragments/TwoBoxesFragment'

export const ImageWithText = (props: ImageWithTextInterface): JSX.Element => {
  return <ImageWithTextFragment {...props} />
}

export const Title = (props: Props): JSX.Element => {
  return <TitleFragment {...props}></TitleFragment>
}

export const TwoBoxes = (): JSX.Element => {
  return <TwoBoxesFragment></TwoBoxesFragment>
}
