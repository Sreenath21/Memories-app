// import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";

// import App from "./App";
// import reducers from "./reducers";
// import "./index.css";

// import { configureStore } from "@reduxjs/toolkit";
// import posts from "./reducers/posts";

// const container = document.getElementById("root");
// const root = createRoot(container);

// const store = configureStore({ reducer: { posts } });

// // const store = createStore(reducers, compose(applyMiddleware(thunk)));

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import posts from "./reducers/posts";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

const store = configureStore({
  reducer: { posts },
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
