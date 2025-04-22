import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import "./countryDetail.css"

function CountryDetail(){
const{ name } = useParams()
const [ country, setCountry] = useState(null)

useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then((response) => response.json())
    .then((data) => setCountry(data[0]))
    .catch(() => setCountry(null))
},[name])

if (!country) return <p>Country not found!</p>

const currencies = country.currencies ? Object.values(country.currencies).map((c) => c.name).join(", ") : "N/A"
const languages = country.languages ? Object.values(country.languages).join(", ") : "N/A"


return(
    <div className="container">
        <Link to="/">Back</Link>
        <h1>{country.name.common}</h1>
        <img src={country.flags.svg} alt={country.name.common} />
        <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
      <p><strong>Currency:</strong> {currencies}</p>
      <p><strong>Continent:</strong> {country.continents?.[0]}</p>
      <p><strong>Language:</strong> {languages}</p>
      <p><strong>Timezone:</strong> {country.timezones?.join(", ")}</p>
      <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
    
    </div>
)
}


export default CountryDetail