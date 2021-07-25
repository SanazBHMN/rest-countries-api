import Homepage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/detail/:name">
            <DetailPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
