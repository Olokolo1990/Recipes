import React, {useState, useEffect} from "react";
import './App.css';
import Recipe from "./Recipe";

const App = () => {

    const APP_ID = "416eec1e";
    const APP_KEY = "e0d409530188da1d31411ea91e79de87";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("")
    const [query, setQuery] = useState("chicken")

    useEffect(() => {
        getRecipes();
    }, [query])

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    }

    const updateSearch = e => {
        setSearch(e.target.value);
        console.log(search);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search)
        setSearch("");
    }

    return (
        <div className="App">
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                <button className="search-button" type="submit"> Search</button>
            </form>
            <div className="recipes">
            {recipes.map(recipe => (
                <Recipe
                    key={recipe.recipe.label}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                ingridients = {recipe.recipe.ingredients}/>
            ))};
            </div>
        </div>
    );
};


export default App;
