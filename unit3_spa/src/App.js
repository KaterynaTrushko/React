
import Header from './Header';
import About from './About';
import Main from './Main';
import Users from './Users';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Router>
        <Switch>
          <Route path="/" component={Maine}/>
          <Route path="/about" component={About}/>
          <Route path="/users" component={Users}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
