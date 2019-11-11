import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";

class Detail extends Component {
  state = {
    recipe: {}
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.recipe.name}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h2>Ingredients</h2>
              <p>{this.state.recipe.recipe}</p>
              <hr/>
              <h2>Method</h2>
              <p>{this.state.recipe.method}</p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Recipes</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Details;