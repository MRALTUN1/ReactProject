import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Route, Switch} from "react-router-dom";
import { Create, List} from "./";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Router>
            <Switch>
              <Route path="/Create" exact component={() => <Create />} />
              <Route path="/List" exact component={() => <List />} />
            </Switch>
          </Router>

        </header>
      </div>
  );
}

export default App;