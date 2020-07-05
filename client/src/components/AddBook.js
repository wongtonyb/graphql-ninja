import React, { Component } from "react";
import { graphql } from "react-apollo";
import * as compose from "lodash.flowright";
import { getAuthorsQuery, addBookMutation } from "../queries/queries"; //used at the end during export

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genre: "",
      authorId: "",
    };
  }

  displayAuthors() {
    let data = this.props.getAuthorsQuery;
    if (data.loading) {
      return <option disabled>Loading Authors..</option>;
    } else {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  }

  submitForm(e) {
    e.preventDefault();
    this.props.addBookMutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId,
      },
    });
  }

  render() {
    return (
      <form id="add-book" onSubmit={this.submitForm.bind(this)}>
        <div className="fields">
          <label>Book name:</label>
          <input
            tpye="text"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>

        <div className="fields">
          <label>Genre:</label>
          <input
            tpye="text"
            onChange={(e) => this.setState({ genre: e.target.value })}
          />
        </div>

        <div className="fields">
          <label>Author:</label>
          <select onChange={(e) => this.setState({ authorId: e.target.value })}>
            <option>Select author</option>
            {this.displayAuthors()}
          </select>
        </div>

        <button>+</button>
      </form>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }), // name is the actual name of the function as prop
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);