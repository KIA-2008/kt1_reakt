import facebook from "./MainImg/facebook 1.png"
import youtube from "./MainImg/youtube 1.png"
import twitter from "./MainImg/twitter 1.png"
import pinterest from "./MainImg/pinterest 1.png"

import "./Main.css"

function Main() {
    return (
        <div>
            <div className="banner">
                <div className="banner_content">
                <div>
                    <h2>Meat</h2>
                    <h1>Chicken</h1>
                </div>
                    <button>More</button>
                </div>
                <div className="banner_social">
                    <img src={facebook}/>
                    <img src={youtube}/>
                    <img src={twitter}/>
                    <img src={pinterest}/>
                </div>
            </div>
            <div className="content_box">
                <div className="content_box_filter">
                    <h1>Filter Recipes</h1>
                    <div>
                        <h1>Diet</h1>
                        <p>Dairy Free</p>
                        <p>Egg Free</p>
                        <p>Sugar Free</p>
                        <p>Gluten Free</p>
                    </div>
                    <div>
                        <h1>Allergies</h1>
                        <p>Glutten</p>
                        <p>Legumes</p>
                        <p>Grain</p>
                        <p>Fruite</p>
                    </div>
                    <div>
                    <h1>Cusine </h1>
                        <p>Asian</p>
                        <p>Italian</p>
                        <p>Chines</p>
                        <p>Thai</p>
                    </div>
                    <div>
                    <h1>Goals </h1>
                        <p>Weight loss</p>
                        <p>Freshness</p>
                        <p>Activeness</p>
                        <p>Rich Nutritions</p>
                    </div>
                </div>
                <div className="content_box_cards"></div>
            </div>
        </div>
    )
}

export default Main