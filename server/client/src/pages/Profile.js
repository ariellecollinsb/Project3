import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron";



class Users extends Component {
  state = {
    user: [],
  }

  // componentDidMount() {
  //   this.loadUser();
  // }

  // loadUser = () => {
  //   API.getUser()
  //     .then(res =>
  //       this.setState({ user: res.data, })
  //     )
  //     .catch(err => console.log(err));
  // };

};

const Profile = () => {
    return (
        <>
            <h2>Welcome userName</h2>
            <hr/>
            <p>User Profile</p>

            <Jumbotron>
              <h1>My Favourite Recipes</h1>
            </Jumbotron>
            {/* {this.state.recipes.favourites ? (
              <List>
                {this.state.recipes.map(recipe => (
                  <ListItem key={recipe._id}>
                    <Link to={"/recipes/" + recipe._id}>
                      <strong>
                        {recipe.name}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteRecipe(recipe._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}; */}

        </>

    )
}

export default Profile;
/*

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    book: {}
  };
  // Add code to get the book with an _id equal to the id in the route param
  // e.g. http://localhost:3000/books/:id
  // The book id for this route can be accessed using this.props.match.params.id

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.book.title} by {this.state.book.author}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>{this.state.book.synopsis}</p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail; ;*/