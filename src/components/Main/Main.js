import facebook from "./MainImg/facebook 1.png"
import youtube from "./MainImg/youtube 1.png"
import twitter from "./MainImg/twitter 1.png"
import pinterest from "./MainImg/pinterest 1.png"
import time from "./MainImg/time.png"
import comments from "./MainImg/comments.png"
import like from "./MainImg/like.png"

import "./Main.css"

import { cuisines, diet, bakery } from "../../data"

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
                        <p className="green_p">Egg Free</p>
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
                        <p className="green_p">Weight loss</p>
                        <p>Freshness</p>
                        <p>Activeness</p>
                        <p>Rich Nutritions</p>
                    </div>
                </div>
                <div className="content_box_cards">
                    <div className="content_box_navigation">
                        <a href="#">Home</a>
                        <a href="#">Explore</a>
                        <a href="#">Help</a>
                        <a href="#">Profile</a>
                    </div>
                    <div className="categoru_cards1">
                        <h1>Cusines</h1>
                        <div className="cards">
                            {cuisines.map((cuisines, index) => (
                            <div className="card">
                                <div className="img_box">
                                    <img src={cuisines.image}/>
                                    <h1>{cuisines.imageText}</h1>
                                </div>
                              
                                <div className="card_title">
                                     <div className="card_title_left">
                                        <h3>{cuisines.title}</h3>
                                    </div>
                                    <div className="card_title_righr">
                                        <p>${cuisines.price}</p>
                                    </div>
                                </div>
                                <div className="card_time">
                                    <div>
                                        <img src={time}/>
                                        <p>{cuisines.times} minutes</p>
                                    </div>
                                    <p>{cuisines.asteriskText}</p>
                                </div>
                                <div className="card_ocenks">
                                    <div className="card_ocenka_left">
                                        <img src={comments}/>
                                        <p>{cuisines.komments}</p>
                                        <img className="like_png" src={like}/>
                                        <p>{cuisines.likes}</p>
                                    </div>
                                    <div className="card_ocenka_right">
                                        <img src={cuisines.star1}/>
                                        <img src={cuisines.star2}/>
                                        <img src={cuisines.star3}/>
                                        <img src={cuisines.star4}/>
                                        <img src={cuisines.star5}/>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="categoru_cards2">
                         <h1>Diet</h1>
                        <div className="cards">
                            {diet.map((diet, index) => (
                            <div className="card">
                                <div className="img_box">
                                    <img src={diet.image}/>
                                </div>
                              
                                <div className="card_title">
                                     <div className="card_title_left">
                                        <h3>{diet.title}</h3>
                                    </div>
                                    <div className="card_title_righr">
                                        <p>${diet.price}</p>
                                    </div>
                                </div>
                                <div className="card_time">
                                    <div>
                                        <img src={time}/>
                                        <p>{diet.times} minutes</p>
                                    </div>
                                    <p>{diet.asteriskText}</p>
                                </div>
                                <div className="card_ocenks">
                                    <div className="card_ocenka_left">
                                        <img src={comments}/>
                                        <p>{diet.komments}</p>
                                        <img className="like_png" src={like}/>
                                        <p>{diet.likes}</p>
                                    </div>
                                    <div className="card_ocenka_right">
                                        <img src={diet.star1}/>
                                        <img src={diet.star2}/>
                                        <img src={diet.star3}/>
                                        <img src={diet.star4}/>
                                        <img src={diet.star5}/>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="categoru_cards3">
                         <h1>Bakery</h1>
                        <div className="cards">
                            {bakery.map((bakery, index) => (
                            <div className="card">
                                <div className="img_box">
                                    <img src={bakery.image}/>
                                </div>
                              
                                <div className="card_title">
                                     <div className="card_title_left">
                                        <h3>{bakery.title}</h3>
                                    </div>
                                    <div className="card_title_righr">
                                        <p>${bakery.price}</p>
                                    </div>
                                </div>
                                <div className="card_time">
                                    <div>
                                        <img src={time}/>
                                        <p>{bakery.times} minutes</p>
                                    </div>
                                    <p>{bakery.asteriskText}</p>
                                </div>
                                <div className="card_ocenks">
                                    <div className="card_ocenka_left">
                                        <img src={comments}/>
                                        <p>{bakery.komments}</p>
                                        <img className="like_png" src={like}/>
                                        <p>{bakery.likes}</p>
                                    </div>
                                    <div className="card_ocenka_right">
                                        <img src={bakery.star1}/>
                                        <img src={bakery.star2}/>
                                        <img src={bakery.star3}/>
                                        <img src={bakery.star4}/>
                                        <img src={bakery.star5}/>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main