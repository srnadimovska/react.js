import { useState } from 'react'

import './App.css'
import DynamicCounter from './components/simpleCounter/dynamicCounter'
import RandomUserFetcher from './components/randomUserFetcher/randomUserFetcher'
import CatImg from './components/catImageGallery/catImg'

function App() {

  const [catImages, setCatImages] = useState([])

  const fetchCatImages = () => {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=10`)
    .then((response) => response.json())
    .then((data) => {
      const catImageUrl = data.map((cat) => cat.url)
      setCatImages(catImageUrl)
    })
  }

  

  return (
    <>
    {/* <DynamicCounter /> */}

    {/* <RandomUserFetcher /> */}

    <div>
      <button onClick={fetchCatImages}>Fetch Cat Images</button>
      <div>
        {catImages.map((url, index) => (
          <CatImg key={index} url={url} />
        ))}
      </div>
    </div>   
    </>
  )
}

export default App
