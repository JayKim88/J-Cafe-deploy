import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ItemListContainer from "./pages/ItemListContainer";
import NotificationCenter from "./components/NotificationCenter";
import ShoppingCart from "./pages/ShoppingCart";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/new-cmarket-redux">
      <Nav />
      <Switch>
        <Route exact={true} path="/">
          <ItemListContainer />
        </Route>
        <Route path="/shoppingcart">
          <ShoppingCart />
        </Route>
      </Switch>
      <NotificationCenter />
    </BrowserRouter>
  );
}

export default App;
