const axios = require("axios");
const router = require("express").Router();

router.get("/recipes/byIngredient/:search/:page?", (req, res) => {
    var page = "";
    if(req.params.page) {
        page = "&p=" + req.params.page
    }

    axios
      .get("http://www.recipepuppy.com/api/?i=" + req.params.search + page)
      .then(({ data: { results } }) => res.json(results))
      .catch(err => res.status(404).json([]))
      .catch(err => res.status(422).json(err));
  });

router.get("/recipes/byDish/:search/:page?", (req, res) => {
    var page = "";
    if(req.params.page) {
        page = "&p=" + req.params.page
    }

    axios
      .get("http://www.recipepuppy.com/api/?q=" + req.params.search + page)
      .then(({ data: { results } }) => res.json(results))
      .catch(err => res.status(404).json([]))
      .catch(err => res.status(422).json(err));
  });

router.get("/recipes/random/:search", (req, res) => {
  console.log(req.isAuthenticated(), req.user, req.sessionID);
    var page = "&p=" + Math.ceil(Math.random() * 99).toString()
    axios
      .get("http://www.recipepuppy.com/api/?q=" + req.params.search + page)
      .then(({ data: { results } }) => (
          
          res.json(results[Math.floor(Math.random() * (results.length - 1))])
      ))
      .catch(err => res.status(404).json([]))
      .catch(err => res.status(422).json(err))
  });


module.exports = router;