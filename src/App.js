import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import Result from './screens/Result';

function App() {
  return <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/result/:letter" component={Result} />
    </Switch>
  </Router>
}

export default App;
