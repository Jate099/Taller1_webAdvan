import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from '../Main/Main';
import Result from '../Result/Result';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main}/>
      <Route path="/result" exact component={Result}/>
    </Router>

  );
}

export default App;
