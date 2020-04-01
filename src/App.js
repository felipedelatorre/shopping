import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Welcome = () => (
  <div>
    <h1 className="text-purple-500">Welcome!!</h1>
    <h1 className="text-purple-500">You can start here</h1>
  </div>
);

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Welcome} />
      </Switch>
    </>
  );
}

export default App;
