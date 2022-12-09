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
import { ThemeProvider } from "@emotion/react";
import cnTheme from "./theme/cnTheme";
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

const GlobalNavBox = React.lazy(() => import("app1/GlobalNavBox"));

const AppLayout = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  const cnGlobalTopMenus = [
    { 
      title: "메뉴1" , 
      subMenuList: [
        {
          title: "test title1"
        },
        {
          title: "test title2"
        },
        {
          title: "test title3"
        },
      ]
    },
    { 
      title: "메뉴2" , 
      subMenuList: [
        {
          title: "test title1"
        },
        {
          title: "test title2"
        },
        {
          title: "test title3"
        },
      ]
    },
    { 
      title: "메뉴3" , 
      subMenuList: [
        {
          title: "test title1"
        },
        {
          title: "test title2"
        },
        {
          title: "test title3"
        },
      ]
    },
    { 
      title: "메뉴4" , 
      subMenuList: [
        {
          title: "test title1"
        },
        {
          title: "test title2"
        },
        {
          title: "test title3"
        },
      ]
    },
  ];

  const cnGlobalSideMenus = [
    { 
      title: "등록" , 
      
    },
    { 
      title: "접수" , 
      
    },
    { 
      title: "수납" , 
      
    },
    { 
      title: "메뉴4" , 
      
    },
  ];

  return (
    <ThemeProvider theme={cnTheme}>
      <AppLayout>
        <Suspense fallback="loading Component from remote, please wait for loading...">
          <GlobalNavBox 
            topMenus={cnGlobalTopMenus}
            sideMenus={cnGlobalSideMenus}
          />
          <div
            style={{
              width: "calc(100% - 48px)",
              height: "calc(100% - 30px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            STH Children
          </div>
        </Suspense>
      </AppLayout>
    </ThemeProvider>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);

  export default App;
