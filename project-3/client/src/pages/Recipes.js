import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";

class Recipes extends Component {
  state = {
    recipes: [],
    name: "",
    ingredients: "",
    method: "",
    isFavourite: false
  };

  componentDidMount() {
    this.loadRecipes();
  }

  loadRecipes = () => {
    API.getRecipes()
      .then(res =>
        this.setState({ recipes: res.data, name: "", ingredients: "", method: "", isFavourite: ""})
      )
      .catch(err => console.log(err));
  };

  deleterecipe = id => {
    API.deleterecipe(id)
      .then(res => this.loadrecipe())
      .catch(err => console.log(err));
  
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Recipes</h1>
            </Jumbotron>
          </Col>

          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Recipes On My List</h1>
            </Jumbotron>
            {this.state.recipe. ? (
              <List>
                {this.state.recipes.map(recipe => (
                  <ListItem key={recipe._id}>
                    <Link to={"/recipes/" + recipe._id}>
                      <strong>
                        {recipe.name} 
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Recipes;