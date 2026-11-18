import "./Footer.css"
import logo from "./FooterImg/logo.png"
import pochta from "./FooterImg/pochta.png"
import facebook from "./FooterImg/facebook.png"
import instagram from "./FooterImg/instagram.png"
import twitter from "./FooterImg/twitter.png"
import pintrest from "./FooterImg/pintrest.png"
import youtube from "./FooterImg/youtube.png"
import line from "./FooterImg/Line.png"

function  Footer() {
    return (
    <footer>
        <div className="footer_left">
            <img src={logo}/>
            <p>All Rights Reserved</p>
        </div>
        <div className="footer_center">
            <div>
                <h1>Fresh Recipe</h1>
                <a href="#">Recipes</a>
                <a href="#">Winter salads</a>
                <a href="#">Organic chicken</a>
                <a href="#">Beef and Mutton</a>
                <a href="#">Flavoured Milk</a>
            </div>
            <div>
                 <h1>In News </h1>
                <a href="#">Our Blogs</a>
                <a href="#">Contests/Sweepsatkes</a>
                <a href="#">Video</a>
                <a href="#">New Releases</a>
                <a href="#">Newsletters</a>
            </div>
            <div>
                 <h1>About US</h1>
                <a href="#">FAQ</a>
                <a href="#">Our Board</a>
                <a href="#">Our Staff</a>
                <a href="#">Contact Us</a>
            </div>
        </div>
        <div className="footer_right">
            <h1>Join Our Newsletter</h1>
            <div className="footer_input">
                <input placeholder="   Email"/>
                <img src={line}/>
                <img className="pochta_img" src={pochta} />
            </div>
            <div className="footer_icons">
                <img src={facebook}/>
                <img src={instagram}/>
                <img src={twitter}/>
                <img src={pintrest}/>
                <img src={youtube}/>
            </div>
        </div>
    </footer>
    )
}

export default Footer