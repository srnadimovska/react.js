import { useState } from 'react'

import './App.css'
import DynamicCounter from './components/simpleCounter/dynamicCounter'
import RandomUserFetcher from './components/randomUserFetcher/randomUserFetcher'
import CatImg from './components/catImageGallery/catImg'

function App() {

  const [catImages, setCatImages] = useState([])
  const resetButton = () => {
    setCatImages([])
}

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

    <div className='div-show'>
      <button onClick={fetchCatImages}>Fetch Cat Images</button>
      {catImages.length >0 && (
        <button onClick={resetButton}>Clear</button>
      )}
      </div>  
      
      {catImages.length > 0 && (
        <div className='div-url'>
        {catImages.map((url, index) => (
          <CatImg key={index} url={url} />
        ))}
        
      </div>
      )}
      
     
    </>
  )
}

export default App
