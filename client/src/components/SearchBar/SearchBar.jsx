import './SearchBar.css'
import { useState } from "react"


const SearchBar = ({onSearch}) => {

    const [name, setName] = useState('')

    const handleChange = (e) => {
        let valueInput = e.target.value
        setName(valueInput)
        onSearch(valueInput)
     }
    
  return (
    <div className='search'>
        <input 
        type="search"
        name='name'
        value={name}
        onChange={handleChange}
        className="input"
         placeholder="Search by name"
        />
    </div>
  )
}

export default SearchBar