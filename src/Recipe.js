import React from "react";
import style from "./recipe.module.css"


const Recipe = ({title, calories, image, ingridients}) => {
    return(
      <div className={style.recipe}>
          <h1>{title}</h1>
          <ol>
              {ingridients.map(ingridients=>(
                  <li>{ingridients.text}</li>
                  ))}
          </ol>
          <p>{calories}</p>
          <img className={style.image} src={image} alt=""/>
      </div>
    );
}

export default Recipe;