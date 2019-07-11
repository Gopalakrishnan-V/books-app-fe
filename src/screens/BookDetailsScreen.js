import React, { Component } from "react";
import { withRouter } from "react-router";
import { fetchBookDetails, deleteBook } from "../services/ApiServices";
import moment from "moment";
import { Button } from "semantic-ui-react";

export class BookDetailsScreen extends Component {
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

  handleEditOnPress = () => {
    const { id } = this.props.match.params;
    this.props.history.push("/edit-book/" + id);
  };

  handleDeleteOnPress = async () => {
    const { id } = this.props.match.params;
    try {
      const { data } = await deleteBook(id);
      if (data.message) {
        this.props.history.push("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { bookDetails } = this.state;
    if (!bookDetails) {
      return null;
    }

    const {
      name,
      cover,
      authorName,
      createdAt,
      modifiedAt
    } = this.state.bookDetails;
    return (
      <div
        className="screen-wrapper"
        style={{ alignItems: "center", paddingTop: 20 }}
      >
        <img
          src={cover}
          style={{ width: 200, height: 320, objectFit: "cover" }}
          alt=""
        />

        <div className="row" style={{ marginTop: 30 }}>
          <Button
            secondary
            content="Edit"
            icon="edit"
            labelPosition="right"
            onClick={this.handleEditOnPress}
            style={{ marginRight: 20 }}
          />
          <Button
            secondary
            content="Delete"
            icon="trash"
            labelPosition="right"
            onClick={this.handleDeleteOnPress}
          />
        </div>

        <table style={{ marginTop: 20 }}>
          <tbody>
            <tr>
              <td className="font-text" style={{ padding: 10 }}>
                Book Name:
              </td>
              <td className="font-text" style={{ padding: 10 }}>
                {name}
              </td>
            </tr>
            <tr>
              <td className="font-text" style={{ padding: 10 }}>
                Author:
              </td>
              <td className="font-text" style={{ padding: 10 }}>
                {authorName}
              </td>
            </tr>
            {createdAt ? (
              <tr>
                <td className="font-text" style={{ padding: 10 }}>
                  Created:
                </td>
                <td className="font-text" style={{ padding: 10 }}>
                  {moment(createdAt).format("DD MMM YYYY, h:mm:ss A")}
                </td>
              </tr>
            ) : null}
            {modifiedAt ? (
              <tr>
                <td className="font-text" style={{ padding: 10 }}>
                  Modified:
                </td>
                <td className="font-text" style={{ padding: 10 }}>
                  {modifiedAt}
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(BookDetailsScreen);
