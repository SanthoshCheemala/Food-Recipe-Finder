import React from "react";

function Card(props){
    
    return (
        <div className="Card">
            <img src={props.dishurl} alt="dal" className="Card-img" />
           <div className="innercard">
           <p className="Name">name:<span className="Dish-Name">{props.Name}</span></p>
            <p className="cator">Category:<span className="Dish-Name">{props.Type}</span></p>
            <p className="Area">Area:<span className="Dish-Name">{props.Area}</span></p>
           </div>
           <hr />
            <button className="more" onClick={()=>{props.SaveId(props.id)}}>See More</button>
        </div>
    );
}
export default Card;