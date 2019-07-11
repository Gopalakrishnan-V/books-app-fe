import React, { Component } from "react";

export class Book extends Component {
  render() {
    const { book, index } = this.props;
    return (
      <div
        key={index}
        className="column"
        style={{ alignItems: "center", margin: 20, cursor: "pointer" }}
        onClick={() => {
          this.props.handleBookOnClick(book.id);
        }}
      >
        <img
          src={book.cover}
          style={{ width: 150, height: 250, objectFit: "cover" }}
          alt=""
        />
        <b>
          <span className="font-text">{book.name}</span>
        </b>
        <span className="font-subtext">{book.authorName}</span>

        
      </div>
    );
  }
}

export default Book;
