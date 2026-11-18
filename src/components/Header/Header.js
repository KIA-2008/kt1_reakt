import strelka from "./HeaderImg/strelka.png"
import poisk from "./HeaderImg/poisk.png"
import logo from "./HeaderImg/CP-Logo 1.png"
import korzina from "./HeaderImg/korzina.png"
import profile from "./HeaderImg/Profile.png"

import "./Header.css"


function  Header() {
    return (
        <header>
            <div className="header_logo">
                <img src={logo}/>
            </div>
            <div className="header_search">
                <div>
                    <button className="head_categories_btn">All Categories <img src={strelka}/></button>
                    <input placeholder="Search" />
                    <button className="head_search_btn"><img src={poisk}/></button>
                </div>
            </div>
            <div className="header_profile">
                <button><img src={korzina}/></button>
                <div><img src={profile}/></div>
            </div>
        </header>
    )
}

export default Header