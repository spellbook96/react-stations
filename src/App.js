// DO NOT DELETE

import React, { useState } from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
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
    <div>
      <header>
        <h1>Dogアプリ</h1>
        <div className="show-container">
          <div className="descripe-container">
            <p className="descripe">犬の画像を表示するサイトです。</p>
          </div>
          <div className="image-container">
            <img className="dog-img" src={dogUrl} alt="dog" />
            <br />
            <button
              onClick={() => {
                getRandomDog()
              } }
              className="update-button">
              更新
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}
