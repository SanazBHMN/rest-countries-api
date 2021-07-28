import { useState } from "react";
import Homepage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ThemeContext from "./libs/Context";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App" data-theme={theme}>
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
    </ThemeContext.Provider>
  );
}

export default App;
