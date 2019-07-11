import React, { Component } from "react";
import { Input, Button } from "semantic-ui-react";
import { withRouter } from "react-router";
import { fetchBookDetails, updateBook } from "../services/ApiServices";

export class EditBookScreen extends Component {
  state = {
    bookDetails: null
  };

  componentDidMount = async () => {
    const { id } = this.props.match.params;

    try {
      const { data } = await fetchBookDetails(id);
      this.setState({ bookDetails: data });
    } catch (e) {
      console.log(e);
    }
  };

  handleSubmit = async () => {
    const { id } = this.props.match.params;
    let { name, cover, authorName } = this.state.bookDetails;
    name = name.trim();
    cover = cover.trim();
    authorName = authorName.trim();

    if (!name || !cover || !authorName) {
      return;
    }

    try {
      const payload = { name, cover, authorName };
      const { data } = await updateBook(id, payload);
      if (data.id) {
        this.props.history.push("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { bookDetails } = this.state;

    if (!bookDetails) {
      return (
        <h4 style={{ textAlign: "center", marginTop: 20 }}>
          Loading contents, Please wait...
        </h4>
      );
    }

    const { name, cover, authorName } = bookDetails;
    return (
      <div className="screen-wrapper">
        <div
          className="column"
          style={{ width: "30%", alignSelf: "center", marginTop: 100 }}
        >
          <h3 style={{ textAlign: "center" }}>Edit Book</h3>

          <Input
            placeholder="Book name"
            value={name}
            onChange={(e, { value }) => {
              this.setState({ bookDetails: { ...bookDetails, name: value } });
            }}
            className="edit-text"
          />
          <Input
            placeholder="Cover Url"
            value={cover}
            onChange={(e, { value }) => {
              this.setState({ bookDetails: { ...bookDetails, cover: value } });
            }}
            className="edit-text"
          />
          <Input
            placeholder="Author Name"
            value={authorName}
            onChange={(e, { value }) => {
              this.setState({
                bookDetails: { ...bookDetails, authorName: value }
              });
            }}
            className="edit-text"
          />

          <Button
            secondary
            onClick={this.handleSubmit}
            primary
            style={{ marginTop: 20 }}
          >
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(EditBookScreen);
