import { useState , useEffect} from 'react'
import CountryCard from './countryCard'
import "./home.css"


function Home() {
    const [countries, setCountries] = useState([])
    const [searchCountry, setSearchCountry] = useState("")

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const filterCountry = countries.filter(country => 
        country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
    )

return(
    <div>
        <h1>Welcome to Country Page</h1>
        <label>Search country by name:</label>
        <input
         type="text" 
         placeholder="Search country by name"
         value={searchCountry}
         onChange={e => setSearchCountry(e.target.value) }/>
         <div>
            {filterCountry.map(country => (
                <CountryCard key={country.cca3} country={country}/>
            ))}
         </div>
    </div>
)
}
export default Home