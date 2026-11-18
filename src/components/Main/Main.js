import facebook from "./MainImg/facebook 1.png"
import youtube from "./MainImg/youtube 1.png"
import twitter from "./MainImg/twitter 1.png"
import pinterest from "./MainImg/pinterest 1.png"

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
        </div>
    )
}

export default Main