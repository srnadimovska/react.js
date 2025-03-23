import welcomeImage from '/src/assets/welcome.png'
import "./headerComponent.css"
import { SimpleButton } from '../button/simpleButton'
function HeaderComponent(){

    return (
        <div id="header-div">
            
            <span><img src={welcomeImage} alt="welcome picture"/></span>
            <h1>Welcome to our page!</h1>
            <SimpleButton />
        </div>
    )
}

export default HeaderComponent