import React, { Component } from "react";
import { fetchAllBooks } from "../services/ApiServices";
import Book from "../components/Book";

export class HomeScreen extends Component {
  state = {
    books: []
  };

  componentDidMount = async () => {
    try {
      const { data } = await fetchAllBooks();
      this.setState({ books: data });
    } catch (e) {
      console.log(e);
    }
  };

  handleBookOnClick = id => {
    this.props.history.push("/books/" + id);
  };

  render() {
    const { books } = this.state;
    return (
      <div className="screen-wrapper">
        <div className="books-grid">
          {books.map((book, index) => {
            return (
              <Book
                key={index}
                index={index}
                book={book}
                handleBookOnClick={this.handleBookOnClick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default HomeScreen;
