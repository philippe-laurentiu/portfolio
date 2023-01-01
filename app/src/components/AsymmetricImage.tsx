import React from 'react'
import './AsymmetricImage.css'

interface Image {
  image: string
}

const AsymmetricImage = ({ image }: Image): JSX.Element => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%'
        // position: 'relative'
      }}
    >
      <img
        src={image}
        alt="test image"
        className="test"
      />
    </div>
  )
}

export default AsymmetricImage
