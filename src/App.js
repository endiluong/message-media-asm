import React, { Component } from "react";
import { Provider } from "react-redux";
import Header from "./components/Header";
import ImageGrid from "./components/ImageGrid";
import configureStore from "./store";
import "./App.scss";
import "./assets/scss/main.scss";

const store = configureStore();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Header />
          <ImageGrid className="grid" />
        </div>
      </Provider>
    );
  }
}

export default App;
