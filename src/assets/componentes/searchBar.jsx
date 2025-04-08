import { useState } from "react"
import './SearchBar.css'

const searchBar = ({ onSubmit}) => {
    const [term, setTerm] = useState('')

    const handleFromSubmit = (event) => {
        event.preventDefault()
        console.log('necesito decirle al componente papa sobre los');
        onSubmit(term)
    }

    const handleChange = (event) => {
        setTerm(event.target.value)
    }
    console.log('term', term)

      return (
    <div className = "search-Bar">
        <form onSubmit={handleFormSubmit}>
            <label> termino de la busqueda: </label>
            <input onChange={handleChange} value={term}/>
        </form>
        </div>
  )
}

export default searchBar