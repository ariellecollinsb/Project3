import axios from "axios";
import { API_URL } from "../config";

export default {

    getRandomRecipe: function () {
        return axios.get("http://localhost:3001/api/recipes/random/onion", {
        });
    },

    // Deletes the book with the given id
    deleteUser: function (id) {
        return axios.delete("/api/users/" + id);
    },
    // Saves a book to the database
    saveUser: function (userData) {
        return axios.post("/api/users", userData);
    },

    wakeUp: function() {
        return axios.get(API_URL + "/wake-up");
    }
};






    // getRandomRecipe: function() {
    //    return axios.get("http://localhost:3001/api/recipes/random/onion", {
    //    });
    // }