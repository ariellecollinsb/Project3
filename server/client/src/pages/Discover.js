import React, { Component } from "react";
import API from "../utils/API";

class Discover extends Component {

    state = {
        recipes: "",
        favourites: [],

    }

    componentDidMount() {
        API.getRandomRecipe()
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <h2>Discover</h2>
        )
    }

}





export default Discover;