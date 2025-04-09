import {useState} from "react"
import SearchBar from ",/components/SearchBar"
import ImageList from ",/components/ImageList"
import SearchImages from "./api"

  function App() {
    //SearchImages('cars')
    const [images, setImages] = useState([])

    const handleSubmit = async(term) => {
      console.log('usted esta buscando con: ', term)
      const result = await SearchImages(term)
      setImages(result)
    }
    return (
      <>
      <h1>Pictures App</h1>
      <SearchBar onSubmit />
      <ImageList />
    </>
  )
}

export default App
