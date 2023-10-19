import React, { useState } from "react";

function Header(props){
    let [recipe, setRecipe] = useState(""); 
    let [isName,SetisName] = useState(false);
    function Addrecipe(event){
        const dishName = event.target.value;
        setRecipe(dishName); 
    }
    // console.log(isName)
    return (
        <div className="Header">
            <div className="Privacy">
                <button className="cook" onClick={()=>props.Main() && SetisName(props.IsValue)}><img src="https://i.pinimg.com/564x/35/8f/74/358f742541b7dacc45fc74dcc166d00c.jpg" height="60" width="65" alt="" className="cook-img" /></button>
            </div>
            <div className="Input">
                <input type="text" placeholder="search a recipe" className="finder" onChange={Addrecipe} value={(isName === true)?" ":recipe} />
                <button className="search" onClick={() => props.ClickBtn(recipe)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </button>
            </div>
            <div className="login">
                <button className="login-btn">Login</button>
                <button className="register-btn">Register</button>
            </div>
        </div>
    );
}

export default Header;
