    import React from "react";


    function Menu(props){
        const Ingrdients = props.ingredients;
        const Measure = props.measures;
        // const apiKey = "AIzaSyA2RiBOYRi3ZWKtOqXdUeclP8PteCibOMo"; // Replace with your actual YouTube API key
      
        // const [duration, setDuration] = useState({ minutes: 0, seconds: 0 });
      
        // function parseISO8601Duration(duration) {
        //   const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
        //   const matches = duration.match(regex);
      
        //   const hours = matches[1] ? parseInt(matches[1], 10) : 0;
        //   const minutes = matches[2] ? parseInt(matches[2], 10) : 0;
        //   const seconds = matches[3] ? parseInt(matches[3], 10) : 0;
        //   return { hours, minutes, seconds };
        // }
      
        // useEffect(() => {
        //   fetch(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${props.videoId}&key=${apiKey}`)
        //     .then(response => response.json())
        //     .then(data => {
        //       const duration = data.items[0].contentDetails.duration;
        //       const parsedDuration = parseISO8601Duration(duration);
        //       setDuration(parsedDuration);
        //     })
        //     .catch(error => console.error("Error:", error));
        // }, [apiKey, props.videoId]);
      
        const NewIngredients = Ingrdients.filter(dish => dish !== null && dish !== "");
        const NewMeasure = Measure.filter(dish => dish !== null && dish !== "");
        return (
            <div className="Back-div">
            <button className="back" onClick={()=>props.Triger()}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
            </svg></button>
            <span className="Heart"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg></span>
            {/* <div className="Duration">
        <span className="Minutes">{duration.minutes}</span>:<span className="secons">{duration.seconds}</span>
            </div> */}
            <div className="Menu">
                <div className="innerMenu">
                <img src={props.strMealThumb} alt="" className="Menu-img" />
                <div className="Head">
                <span className="Main">{props.strMeal}</span>
                <p className="Menu-name">Category:<span className="Menu-Dish">{props.strCategory}</span></p>
                <p className="Menu-name">Area:<span className="Menu-Dish">{props.strArea}</span></p>
                <a href={props.strYoutube} target="self" className="youtube">watch a video on How to make {props.strMeal} </a>
                <p className="para">Instructions: <span className="int">{props.strInstructions}</span></p>
            </div>
            </div>
            <div className="ingredients">
                <h1>Ingredients and It's Qunatity:</h1>
                <table border={1}>
                    <tr>
                        <th>
                        Ingredient
                        </th>
                        <th>
                        Measure
                        </th>
                    </tr>
                    <tbody>
                        {NewIngredients.map((dish,id)=>(
                            <tr>
                                <td>{dish}</td>
                                <td>{NewMeasure[id]}</td>
                            </tr> 
                        ))}
                    </tbody>
                </table>
            </div>

            </div>
            </div>

        );
    }

    export default Menu;

