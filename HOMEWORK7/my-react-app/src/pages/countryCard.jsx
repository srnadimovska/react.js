import { Link } from "react-router-dom"

import "./countryCard.css"

function CountryCard({country}) {
return (
    <Link to={`/country/${country.name.common}`}>
        <div className="container">
            <h2>{country.name.common}</h2>
            <img src={country.flags.svg} alt={country.name.common}/>
            
            
        </div>
    </Link>
)
}
export default CountryCard