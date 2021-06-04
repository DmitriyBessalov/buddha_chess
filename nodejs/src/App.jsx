import React, {useState} from "react";
import {NavMenu} from "./components/Navbar";
import {Container} from "@material-ui/core";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Auth} from "./components/Auth/Auth";
import {Article} from "./components/Article/Article";
import {StartGame} from "./components/StartGame/StartGame";
import {StylesProvider} from "@material-ui/core/styles";

export const Logined = React.createContext()

if (window.location.host==="buddhachess.org"){
    window.backend = window.frontend = "https://buddhachess.org"
}else{
    window.backend = "http://localhost:8000"
    window.frontend = "http://localhost:3000"
}

export const App = () => {
    const [isLogined, setIsLogined] = useState(false)
    return(
      <StylesProvider injectFirst>
        <base href={window.frontend} />
        <BrowserRouter>
          <Logined.Provider value={isLogined}>
            <NavMenu />
            <Container>
              <Switch>
                  <Route path="/ru/auth" component={Auth}/>
                  <Route path="/ru/играть" component={StartGame}/>
                  <Route path="/" component={Article}/>
              </Switch>
            </Container>
          </Logined.Provider>
        </BrowserRouter>
      </StylesProvider>
    )
}
