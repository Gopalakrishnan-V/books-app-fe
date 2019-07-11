import React, { Component } from "react";
import { Input, Button } from "semantic-ui-react";
import { withRouter } from "react-router";
import { createBook } from "../services/ApiServices";

export class NewBookScreen extends Component {
  state = {
    name: "",
    cover: "",
    authorName: ""
  };

  handleSubmit = async () => {
    let { name, cover, authorName } = this.state;
    name = name.trim();
    cover = cover.trim();
    authorName = authorName.trim();

    if (!name || !cover || !authorName) {
      return;
    }

    try {
      const payload = { name, cover, authorName };
      const { data } = await createBook(payload);
      if (data.id) {
        this.props.history.push("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { name, cover, authorName } = this.state;
    return (
      <div className="screen-wrapper">
        <div
          className="column"
          style={{ width: "30%", alignSelf: "center", marginTop: 100 }}
        >
          <h3 style={{ textAlign: "center" }}>Create New Book</h3>

          <Input
            placeholder="Book name"
            value={name}
            onChange={(e, { value }) => {
              this.setState({ name: value });
            }}
            className="edit-text"
          />
          <Input
            placeholder="Cover Url"
            value={cover}
            onChange={(e, { value }) => {
              this.setState({ cover: value });
            }}
            className="edit-text"
          />
          <Input
            placeholder="Author Name"
            value={authorName}
            onChange={(e, { value }) => {
              this.setState({ authorName: value });
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

export default withRouter(NewBookScreen);
