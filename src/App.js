import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom/cjs/react-router-dom";
import Login from "./screen/Login";
import { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import routes from "./screen/Routes";
import Home from "./screen/Home";
import Signup from "./screen/Signup";
import Authentication from "./Authentication";

function App() {
  const [isLoggedInVar, setIsLoggedInVar] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState();
  return (
    <>
      <HelmetProvider>
        <GlobalStyles>
          <Router>
            <Switch>
              <Route exact path={routes.home}>
                {
                  isLoggedIn ? <Home /> : <Login />
                }
              </Route>
              {
                !isLoggedIn ? (
                  <Route exact path={routes.Signup}>
                    <Signup />
                  </Route>
                ) : null
              }
            </Switch>
          </Router>
        </GlobalStyles>
      </HelmetProvider>
      <Authentication isLoggedInVar={isLoggedInVar} setIsLoggedInVar={setIsLoggedInVar} />
    </>
  );
}

export default App;
