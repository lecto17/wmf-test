import React, { Suspense } from "react";
import ReactDOM from "react";

const Counter = React.lazy(() => import('app1/Counter'))

function App() {
  return (
    <div className="wmf-test">
      <h1>Hello, this Componet is From Remote</h1>
      <Suspense fallback="loading Component from remote, please wait for loading...">
        <Counter />
      </Suspense>
    </div>
  );
}

export default App;

ReactDOM.render(<App/>, document.getElementById('root'));
