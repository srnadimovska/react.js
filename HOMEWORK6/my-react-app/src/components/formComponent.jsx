import { useState } from "react"
import "./formComponent.css"


function FormComponent () {

    const [ name, setName ] = useState("")
    const [ errorName, setErrorName] = useState("")

    const [ email, setEmail ] = useState("")
    const [ errorEmail, setErrorEmail ]= useState("") 

    const [ gender, setGender ] = useState("")
    const [ errorGender, setErrorGender] = useState("")

    const [ interests, setInterests] = useState([])
    const [ errorInterests, setErrorInterest ] = useState("")

    const [ country, setCountry ] = useState("")
    const [ errorCountry, setErrorCountry] = useState("")

    const [submitData, setSubmitData] = useState(null)

    const handleInputName = (event) => {
        setName(event.target.value)
    }
    const handleInputEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleGenderChange = (event) => {
        setGender(event.target.value)
    }

    const handleCheckboxChange = (event) => {
        if(event.target.checked){
            setInterests([...interests, event.target.value])
        } else {
            setInterests(interests.filter((interest) => interest !== event.target.value))
        }   
    }

    const handleCountrySelect = (event) => {
        setCountry(event.target.value)
    }



    

    const handleSubmitForm = (e) => {
        e.preventDefault()

        if (name.trim() === "" || name.length < 3) {
            setErrorName("Name must be at least three charaters")
        } else {
            setErrorName("")
        }

        if (email.trim() ==="") {
            setErrorEmail("Please enter valid email")
        } else {
            setErrorEmail("")
        }

        if(gender === "") {
            setErrorGender("Please select your gender.")
        } else {
            setErrorGender("")
        }

        if(interests.length === 0 ) {
            setErrorInterest("Please select one or more fields")
        } else {
            setErrorInterest("")
        }

        if(country === "") {
            setErrorCountry("Please select country")
        } else {
            setErrorCountry("")
        }

        if (
            name.trim() !== "" &&
            name.length >= 3 &&
            email.trim() !== "" &&
            gender !== "" &&
            interests.length > 0 &&
            country !== ""
          ) {
            setSubmitData({
              name,
              email,
              gender,
              interests,
              country,
            });
          } else {
            setSubmitData(null);
          }
        
    }


    return (
        <div className="form-div">
            <form onSubmit={handleSubmitForm}>
            <label>Name:
                <input 
                type="text" 
                value={name}
                placeholder="name"
                onChange={(e) => handleInputName(e)}
                />
            </label>
            {errorName && <p style={{color:"red"}}>{errorName}</p>}

            <label>Email:
                <input 
                type="email"
                value={email}
                placeholder="email"
                onChange={(e) => handleInputEmail(e)}
                />
            </label>
            {errorEmail && <p style={{color:"red"}}>{errorEmail}</p>}

            <p>Select gender:</p>
            <label>Male
                <input 
                type="radio"
                value="male"
                checked={gender === "male"}
                onChange={handleGenderChange}
                />
            </label>
            <label>Female
                <input 
                type="radio"
                value="female"
                checked={gender === "female"}
                onChange={handleGenderChange}
                />
            </label>
            {errorGender && <p style={{color:"red"}}>{errorGender}</p>}

            <p>Select your interest:</p>
            <label>Music
                <input 
                type="checkbox"
                value="music"
                checked={interests.includes("music")}
                onChange={handleCheckboxChange}
                />
            </label>
            <label>Sport
                <input 
                type="checkbox"
                value="sport"
                checked={interests.includes("sport")}
                onChange={handleCheckboxChange}
                />
            </label>
            <label>Art
                <input 
                type="checkbox"
                value="art"
                checked={interests.includes("art")}
                onChange={handleCheckboxChange}
                />
            </label>
            <label>Science
                <input 
                type="checkbox"
                value="science"
                checked={interests.includes("science")}
                onChange={handleCheckboxChange}
                />
            </label>
            <label>Technology
                <input 
                type="checkbox"
                value="tech"
                checked={interests.includes("tech")}
                onChange={handleCheckboxChange}
                />
            </label>
            {errorInterests && <p style={{color:"red"}}>{errorInterests}</p>}
            
            <label>Select your country:</label>
            <select value={country} onChange={handleCountrySelect}>
                <option value="">Select</option>
                <option value="macedonia">Macedonia</option>
                <option value="serbia">Serbia</option>
                <option value="greece">Greece</option>
                <option value="croatia">Croatia</option>
            </select>
            {errorCountry && <p style={{color:"red"}}>{errorCountry}</p>}



            <button  type="submit">Submit</button>
            </form>

            {submitData && (
                <div className="submit-div">
                    <p>Submitted data:</p>
                    <p>Name: {submitData.name}</p>
                    <p>Email: {submitData.email}</p>
                    <p>Gender: {submitData.gender}</p>
                    <p>Interests: {submitData.interests.join(",")}</p>
                    <p>Country: {submitData.country}</p>
                    </div>
            )}

        </div>
    )
}

export default FormComponent