import React from 'react'
import { ImageWithText, ImageWithTextInterface } from './pagefragments/ImageWithText'

export const imageWithText = ({ bgcolor }: ImageWithTextInterface): JSX.Element => {
  return <ImageWithText bgcolor={bgcolor} />
}
