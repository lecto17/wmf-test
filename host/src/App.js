import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import styled from "@emotion/styled";
import "./global.css";
import "./reset.css";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  // middleware: [sagaMiddleware]
}
);

// sagaMiddleware.run(rootSaga);

// const Counter = React.lazy(() => import('app1/Counter'));
const Button = React.lazy(() => import('app1/Button'));
const GlobalNav = React.lazy(() => import("app1/GlobalNav"));
// const DefaultLayout = React.lazy(() => import("app1/DefaultLayout"))

const AppLayout = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  const menuList = ["메뉴1", "메뉴2"];

  return (
    <AppLayout>
      <Suspense fallback="loading Component from remote, please wait for loading...">
        {/* <DefaultLayout /> */}
        <GlobalNav menuList={menuList} />
      </Suspense>
    </AppLayout>
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
