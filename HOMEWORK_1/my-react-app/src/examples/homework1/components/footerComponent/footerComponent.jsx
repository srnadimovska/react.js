import "./footerComponent.css"
import { SimpleButton } from '../button/simpleButton'

function FooterComponent () {
    return (
        <><footer id="footer">
            <div>
                <h3>Thank you for visiting my website!</h3>
                <p>Contact us:123@yahoo.com</p>
                <SimpleButton />
            </div>
            <div id="social-media">
                <h3>Find us on:</h3>
                <a href="https://www.facebook.com/">Facebook</a>
                <a href="https://www.facebook.com/">Instagram</a>
                <a href="https://www.facebook.com/">Twitter</a>
            </div>
        </footer>
        
        <div>
                <p>2025 My WebSite. All rights reserved.</p>
            </div></>


            
            
    )
}
export default FooterComponent