import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import "./global.css";
import "./reset.css";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [sagaMiddleware]
}
);

sagaMiddleware.run(rootSaga);

// const Counter = React.lazy(() => import('app1/Counter'));
const Button = React.lazy(() => import('app1/Button'));
// const DefaultLayout = React.lazy(() => import("app1/DefaultLayout"))

function App() {
  return (
    <div className="wmf-test">
      <h1>Hello, this Componet is From Remote</h1>
      <Suspense fallback="loading Component from remote, please wait for loading...">
        {/* <DefaultLayout /> */}
        <Button />
      </Suspense>
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));


  export default App;
