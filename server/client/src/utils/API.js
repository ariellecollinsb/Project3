import axios from "axios";

export default {
    getRandomRecipe: function() {
       return axios.get("http://localhost:3001/api/recipes/random/onion", {
       });
    }
}