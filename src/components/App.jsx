import React, { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";
import Menu from "./Menu";

function App() {

  
  const [isSet, setIsSet] = useState(true);
  const [findId, setFindId] = useState("");
  const [recepie, setRecepie] = useState([]);
  let [isName,SetisName] = useState(false);
  const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?s");

  function foundBtn(dishName) {
    setUrl("https://www.themealdb.com/api/json/v1/1/search.php?s=" + dishName);
    console.log(url)
    setIsSet(true);
  }

  function funId(id) {
    setFindId(id);
    setIsSet(false);
  }

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setRecepie(json.meals);
      });
  }, [recepie,url]);
  let ingredients = []
  let measures = []
 // eslint-disable-next-line array-callback-return
 recepie.map((dish)=>{
  if(dish.idMeal === findId){
    ingredients = Array.from({ length: 20 }, (_, i) => dish[`strIngredient${i + 1}`]);
     measures = Array.from({ length: 20 }, (_, i) => dish[`strMeasure${i + 1}`]);
  }
 })
 function Collections(){
    setIsSet(true)

 }
 function MainMenu(){
  setIsSet(true)
  SetisName(true)
  setUrl("https://www.themealdb.com/api/json/v1/1/search.php?s")
 }
  return (
    <div className="innerdiv">
      <Header ClickBtn={foundBtn} Main={MainMenu} IsValue={isName} />
      {isSet ? (
        <div className="Container">
          {recepie.map((dish) => (
            <Card
              Name={dish.strMeal}
              key={dish.idMeal}
              dishurl={dish.strMealThumb}
              Type={dish.strCategory}
              Area={dish.strArea}
              id={dish.idMeal}
              SaveId={funId}
            />
          ))}
        </div>
      ) : (
        recepie.map(
          (dish) =>
            dish.idMeal === findId && (
              <Menu
                key={dish.idMeal}
                strMealThumb={dish.strMealThumb}
                strYoutube={dish.strYoutube}
                strMeal={dish.strMeal}
                strCategory={dish.strCategory}
                strArea={dish.strArea}
                strInstructions={dish.strInstructions}
                ingredients={ingredients} 
                measures={measures}
                Triger = {Collections}
              />
            )
        )
      )}
    </div>
  );
}

export default App;
