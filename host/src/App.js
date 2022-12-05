import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./global.css";
import "./reset.css";

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

export default App;

ReactDOM.render(<App/>, document.getElementById('root'));
