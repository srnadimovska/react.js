import "./menuComponent.css"
import { SimpleButton } from "../button/simpleButton"
function MenuComponent () {
    return (
        <div className="menu">
        <nav >
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><SimpleButton /></li>
                    </ul>
                </nav>
         </div>
    )
}
export default MenuComponent