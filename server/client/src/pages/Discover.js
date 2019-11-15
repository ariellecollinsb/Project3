import React, { Component } from "react";
import API from "../utils/API";

class Discover extends Component {

    state = {
        recipes: [],
        name: "",
        ingredients: "",
        method: "",
        favourites: [],
        userName: ""

    }

    componentDidMount = () => {
        this.loadRecipes();
    }

    loadRecipes = () => {
        API.getRandomRecipe()
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <>
            <h2>Discover</h2>
            </>
        )
    }

};

export default Discover;