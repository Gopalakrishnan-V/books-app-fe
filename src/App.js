import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import NewBookScreen from "./screens/NewBookScreen";
import EditBookScreen from "./screens/EditBookScreen";
import BookDetailsScreen from "./screens/BookDetailsScreen";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/new-book" component={NewBookScreen} />
        <Route exact path="/edit-book/:id" component={EditBookScreen} />
        <Route exact path="/books/:id" component={BookDetailsScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
