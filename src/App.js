import { Provider } from "react-redux";
import Header from "./components/Header";
import ImageGrid from "./components/ImageGrid";
import configureStore from "./store";
import "./style.scss";
import "./assets/scss/main.scss";

const store = configureStore();

const App = () => {
  const renderer = () => {
    return (
      <Provider store={store}>
        <div className="app">
          <Header />
          <ImageGrid className="grid" />
        </div>
      </Provider>
    );
  };
  return renderer();
};

export default App;
