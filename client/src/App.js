import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import FavsPage from './Favspage.js';
import Homepage from './homepage.js'

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/Favs" component={FavsPage } />
          
          </Switch>

      </Router>
    </div>
  );
}

export default App;