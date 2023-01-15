import React from 'react'
import { ImageFragment, ImageInterface } from './pagefragments/ImageFragment'
import { OneBoxFragment, OneBoxInterface } from './pagefragments/OneBoxFragment'
import { TechnologyFragment, TechnologyFragmentInterface } from './pagefragments/TechnologyFragment'
import { TitleFragment, TitleInterface } from './pagefragments/TitleFragment'
import { TitleLogoTextFragment, TitleLogoTextInterface } from './pagefragments/TitleLogoTextFragment'
import { TwoBoxesFragment, TwoBoxInterface } from './pagefragments/TwoBoxesFragment'

export const Title = (props: TitleInterface): JSX.Element => {
  return <TitleFragment {...props}></TitleFragment>
}

export const Image = (props: ImageInterface): JSX.Element => {
  return <ImageFragment {...props}></ImageFragment>
}

export const TitleLogoText = (props: TitleLogoTextInterface): JSX.Element => {
  return <TitleLogoTextFragment {...props}></TitleLogoTextFragment>
}

export const OneBox = (props: OneBoxInterface): JSX.Element => {
  return <OneBoxFragment {...props}></OneBoxFragment>
}

export const TwoBoxes = (props: TwoBoxInterface): JSX.Element => {
  return <TwoBoxesFragment {...props}></TwoBoxesFragment>
}

export const Technology = (props: TechnologyFragmentInterface): JSX.Element => {
  return <TechnologyFragment {...props}/>
}
