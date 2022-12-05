import React, { Suspense } from "react";
import ReactDOM from "react-dom";

const Counter = React.lazy(() => import('app1/Counter'));
const Button = React.lazy(() => import('app1/Button'));

function App() {
  return (
    <div className="wmf-test">
    
      <h1>Hello, this Componet is From Remote</h1>
      <Suspense fallback="loading Component from remote, please wait for loading...">
        <Button />
      </Suspense>
    </div>
  );
}

export default App;

ReactDOM.render(<App/>, document.getElementById('root'));
