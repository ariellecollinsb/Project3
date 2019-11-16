import React from "react";

const Search = () => {
    return (
        <div className="jumbotron">
            <p className="lead">Search Here!</p>
            <input type="text"></input>
            <a className="btn btn-primary btn-lg" href="http://localhost:3001/api/search" role="button">Search</a>
        </div>
    )
}

export default Search;