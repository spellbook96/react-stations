import React, { useState }from 'react'
import './Description.css'
import { DogImage } from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/pinscher-miniature/n02107312_471.jpg',
  )

  const getRandomDog = () => {
    let response = fetch('https://dog.ceo/api/breeds/image/random')
    response
      .then(response => response.json())
      .then(response => {
        if (response.status !== 'success') {
          throw 'api unsucess'
        } else {
          setDogUrl(response.message)
        }
      })
  }

  return (
    <div className='show-container'>
      <div className="descripe-container">
        <p className="descripe">犬の画像を表示するサイトです。</p>
      </div>
      <div>
        <DogImage url={dogUrl} />
        <br />
        <button
          onClick={() => {
            getRandomDog()
          }}
          className="update-button"
        >
          更新
        </button>
      </div>
    </div>
  )
}

export default Description