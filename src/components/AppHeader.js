import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { withRouter } from "react-router";

export class AppHeader extends Component {
  handleCreateBook = () => {
    this.props.history.push("/new-book");
  };

  handleTitleClick = () => {
    this.props.history.push("/");
  };

  render() {
    const { pathname } = this.props.location;
    let showCreateButton = true;
    if (pathname.includes("new-book") || pathname.includes("edit-book")) {
      showCreateButton = false;
    }

    return (
      <div
        className="row"
        style={{
          width: "100%",
          height: 55,
          background: "rgba(0,0,0,.87)",
          justifyContent: "space-between",
          paddingLeft: 10,
          paddingRight: 10
        }}
      >
        <div
          className="row"
          style={{ alignItems: "center", cursor: "pointer" }}
          onClick={this.handleTitleClick}
        >
          <img
            src={
              "http://icons.iconarchive.com/icons/ampeross/smooth/512/Apple-Books-icon.png"
            }
            style={{ height: 40 }}
            alt=""
          />
          <span
            style={{
              fontSize: 16,
              fontWeight: "600",
              marginLeft: 10,
              color: "white"
            }}
          >
            Books App
          </span>
        </div>

        {showCreateButton ? (
          <Button
            content="Create Book"
            icon="plus"
            secondary
            labelPosition="left"
            onClick={this.handleCreateBook}
          />
        ) : null}
      </div>
    );
  }
}

export default withRouter(AppHeader);
