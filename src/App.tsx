import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Quadratic from './pages/Graphics/Quadratic';
import IndexPage from './pages/IndexPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route component={IndexPage} path="/" exact />
        <Route component={Quadratic} path="/quadratic" />
      </Router>
    </div>
  );
}

export default App;
