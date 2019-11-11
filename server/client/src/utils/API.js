import axios from "axios";

export default {
    getRandomRecipe: function() {
       return axios.get("http://www.recipepuppy.com/api/");
    }
}