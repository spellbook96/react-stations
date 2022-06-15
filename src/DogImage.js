// DO NOT DELETE
import React from 'react'
import './DogImage.css'
export const DogImage = (props) => {
  return <img className="dog-img" src={props.url} alt="dog" />
}