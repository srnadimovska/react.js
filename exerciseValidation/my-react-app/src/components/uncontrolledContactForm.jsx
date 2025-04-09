import { useRef } from "react"
import "./uncontrolledContactForm.css"

function UncontrolledContactForm () {

     const inputRefUsername = useRef(null)
     const inputRefEmail = useRef(null)
     const inputRefMessage = useRef(null)

     const handleSubmit = (e) => {
        e.preventDefault()

        alert(`Input : 
            ${inputRefUsername.current.value},
            ${inputRefEmail.current.value},
            ${inputRefMessage.current.value}`)
     }

    return (
        <div className="uncontrolled-div">
        <form onSubmit={handleSubmit}>
        <label>Username:
            <input type="text" ref={inputRefUsername}/>
        </label>
        <br/>
        <label>Email:
            <input type="email" ref={inputRefEmail} />
        </label>
        <br/>
        <label>Message:
            <textarea ref={inputRefMessage} />
        </label>
        <br/>
        <button type="submit">Submit</button>
        </form>
        
        
        </div>
    )

}

export default UncontrolledContactForm