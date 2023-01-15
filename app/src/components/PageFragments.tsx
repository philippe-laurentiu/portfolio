import React from 'react'
import { ImageWithTextFragment, ImageWithTextInterface } from './pagefragments/ImageWithTextfragment'
import { TechnologyFragment, TechnologyFragmentInterface } from './pagefragments/TechnologyFragment'
import { TitleFragment, Props } from './pagefragments/TitleFragment'
import { TwoBoxesFragment, PropsBox } from './pagefragments/TwoBoxesFragment'

export const ImageWithText = (props: ImageWithTextInterface): JSX.Element => {
  return <ImageWithTextFragment {...props} />
}

export const Title = (props: Props): JSX.Element => {
  return <TitleFragment {...props}></TitleFragment>
}

export const TwoBoxes = (props: PropsBox): JSX.Element => {
  return <TwoBoxesFragment {...props}></TwoBoxesFragment>
}

export const Technology = (props: TechnologyFragmentInterface): JSX.Element => {
  return <TechnologyFragment {...props}/>
}
