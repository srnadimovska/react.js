import { useState } from "react";
import "./contactForm.css"

function ContactForm () {
    const [username, setUsername] = useState("")
    const [errorUsername, setErrorUsername] = useState("")
    const [email, setEmail] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [message, setMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (username.trim ()=== "" || username.length < 3){
            setErrorUsername("Username is not valid")
            return false
        } else {
            setErrorUsername("")
                alert(`You entered this username: ${username}`)
           
        }

        if (email.trim()=== "") {
            setErrorEmail("Email is not valid")
            return false
        } else {
            setErrorEmail("")
            alert('Your email is ok')
        }

        if (message.trim() === "" || message.length < 10){
            setErrorMessage("Message should be long at least 10 characters")
            return false
        } else {
            setErrorMessage("")
            alert(`Your message is: ${message}`)
        }

        return true
    }



    return (

        <div className="contact-form">
        <form onSubmit={handleSubmit}>
            <label>Username: 
                 <input 
                type="text"
                value={username}
                onChange={handleUsername} />
            </label>
            {errorUsername && <p style={{color:"red"}}>{errorUsername}</p>}

            <label>Email:
                <input 
                type="email"
                value={email}
                onChange={handleEmail} />
            </label>
            {errorEmail && <p style={{color:"red"}}>{errorEmail}</p>}

            <label>Message:
                <textarea 
                value={message}
                onChange={handleMessage}/>
            </label>
            {errorMessage && <p style={{color:"red"}}>{errorMessage}</p>}

            <button type="submit">Submit</button>
            
        </form>
        
        
        </div>
    )


    
}

export default ContactForm
