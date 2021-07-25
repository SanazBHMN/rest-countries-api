import Homepage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [country, setCountry] = useState({});
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Homepage selectCountry={setCountry} />
          </Route>
          <Route path="/detail/:name">
            <DetailPage country={country} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
