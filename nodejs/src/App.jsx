import React, {useState} from "react";
import {NavMenu} from "./components/Navbar";
import {Container} from "@material-ui/core";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Auth} from "./components/Auth/Auth";
import {Article} from "./components/Article/Article";
import {StylesProvider} from "@material-ui/core/styles";

export const Logined = React.createContext()

export const App = () => {
    const [isLogined, setIsLogined] = useState(false)
    return(
      <StylesProvider injectFirst>
        <BrowserRouter>
          <Logined.Provider value={isLogined}>
            <NavMenu />
            <Container>
              <Switch>
                  <Route path="/auth" component={Auth}/>
                  <Route path="/article/:slug" component={Article}/>
                  <Route path="/" component={Article}/>
              </Switch>
            </Container>
          </Logined.Provider>
        </BrowserRouter>
      </StylesProvider>
    )
}
