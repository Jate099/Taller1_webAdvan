import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from '../../Components/Editor/Main';
import Result from '../Result/Result';
import View from '../../Components/View/View';

function App() {
  return (
    <Router>
      <Route path="/" exact component={View}/>
      <Route path="/result" exact component={Result}/>
    </Router>

  );
}

export default App;
