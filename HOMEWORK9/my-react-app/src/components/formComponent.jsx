import { useEffect, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage"
import "./formComponent.css"

function FormComponent() {

const [data, setData] = useLocalStorage()
const [name, setName] = useState("")
const [nameError, setNameError] = useState("")

const [email, setEmail] = useState("")
const [emailError, setEmailError] = useState("")

const [password, setPassword] = useState("")
const [passwordError, setPasswordError] = useState("")

const [address, setAddress] = useState("")
const [addressError, setAddressError] = useState("")

const [country, setCountry] = useState("")
const [countryError, setCountryError] = useState("")

const [submitData, setSubmitData] = useState(null)

useEffect(() => {
    if(data) {
        setName(data.name || "")
        setEmail(data.email || "")
        setPassword(data.password || "")
        setAddress(data.address || "")
        setCountry(data.country || "")
    }
},[data])

const handleInputName = (event) =>{
    setName(event.target.value)
}

const handleInputEmail = (event) => {
    setEmail(event.target.value)
}

const handleInputPassword = (event) => {
    setPassword(event.target.value)
}

const handleInputAddress = (event) => {
    setAddress(event.target.value)
}

const handleInputCountry = (event) => {
    setCountry(event.target.value)
}

const handleSubmitForm = (e) => {
    e.preventDefault()

    setNameError("")
    setEmailError("")
    setPasswordError("")
    setAddressError("")
    setCountryError("")

    if(name.trim() === "" || name.length === 0){
        setNameError("Enter valid username")
    } else setNameError("")

    if(email.trim() === ""){
        setEmailError("Enter valid email")
    } else setEmailError("")

    if(password.trim() === "" || password.length < 6){
        setPasswordError("Your password should be longer then six characters")
    } else setPasswordError("")

    if(address.trim() === "") {
        setAddressError("Enter valid address")
    } else setAddressError("")

    if(country === "") {
        setCountryError("Please choose your country")
    } else setCountryError("")

if (
    name.trim() !=="" &&
    name.length > 0 &&
    email.trim() !=="" &&
    password.trim() !=="" &&
    password.length >= 6 &&
    address.trim() !=="" &&
    country !== ""
) {
    setSubmitData({
        name,email,password,address,country
    })
    setData({
        name,email,password,address,country
    })
} else {
    setSubmitData(null)
}
        
}

const handleClearData = (e) => {
    e.preventDefault()
    setName("")
    setEmail("")
    setPassword("")
    setAddress("")
    setCountry("")
    setSubmitData(null)
    setData({})
    localStorage.removeItem("data")
}

return (
    <div className="submit-div">
    <form onSubmit={handleSubmitForm}>
        <label>Name:</label>
        <input
        type="text"
        value={name}
        placeholder="enter your username"
        onChange={handleInputName}
        />
        {nameError && <h3>{nameError}</h3>}
        <label>Password:</label>
        <input
        type="password"
        value={password}
        placeholder="Enter your password"
        onChange={handleInputPassword}
        />
        {passwordError && <h3>{passwordError}</h3>}
        <label>Email:</label>
        <input
        type="text"
        value={email}
        placeholder="Enter your email"
        onChange={handleInputEmail}
        />
        {emailError && <h3>{emailError}</h3>}
        <label>Address:</label>
        <input
        type="text"
        value={address}
        placeholder="Enter your address"
        onChange={handleInputAddress}
        />
        {addressError && <h3>{addressError}</h3>}
        <label>Select your country</label>
        <select value={country} onChange={handleInputCountry}>
                <option value="">Select</option>
                <option value="macedonia">Macedonia</option>
                <option value="serbia">Serbia</option>
                <option value="greece">Greece</option>
                <option value="croatia">Croatia</option>
        </select>
        {countryError && <h3>{countryError}</h3>}

        <button type="submit">Submit your info</button>
        <button onClick={handleClearData}>Clear</button>
    </form>

{submitData && (
    <div className="submit-div">
        <p>Submitted data:</p>
        <p>Name: {submitData.name}</p>
        <p>Email: {submitData.email}</p>
        <p>Address:{submitData.address}</p>
        <p>Country: {submitData.country}</p>
        </div>
)}

</div>
)

}

export default FormComponent