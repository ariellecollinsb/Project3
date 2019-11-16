import axios from "axios";
import { API_URL } from "../config";

export default {

    getRandomRecipe: function () {
        return axios.get("http://localhost:3001/api/recipes/random/onion", {
            withCredentials: true
        });
    },

    getRecipes: function (query) {
        return axios.get("http://localhost:3001/api/recipes", { params: { q: query } });
    },

    // Deletes the user with the given id
    deleteUser: function (id) {
        return axios.delete("http://localhost:3001/api/users/" + id);
    },
    // Saves user info to the database
    saveUser: function (userData) {
        return axios.post("http://localhost:3001/api/users", userData);
    },

    wakeUp: function () {
        return axios.get(API_URL + "/wake-up");
    }
};






    // getRandomRecipe: function() {
    //    return axios.get("http://localhost:3001/api/recipes/random/onion", {
    //    });
    // }