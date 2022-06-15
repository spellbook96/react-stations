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

  return (
    <div>
      <header>
        <h1>Dogアプリ</h1>
        <p>犬の画像を表示するサイトです。</p>
        <img src={dogUrl} alt="dog" /><br/>
        <button
          onClick={() => {
            setDogUrl( `https://images.dog.ceo/breeds/shiba/shiba-9.jpg` )
          }}
        >
          change
        </button>
      </header>
    </div>
  )
}
