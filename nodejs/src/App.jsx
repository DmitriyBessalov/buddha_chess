import React from "react";
// import {useState} from "react";
import {NavMenu} from "./components/Navbar";
import {Container} from "@material-ui/core";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Auth} from "./components/Auth/Auth";
import {Article} from "./components/Article/Article";
import {Game} from "./components/Game/Game";
import {StartGame} from "./components/StartGame/StartGame";
import {StylesProvider} from "@material-ui/core/styles";
import {frontend, web_protocol} from "./components/conf";

export const Logined = React.createContext()

export const App = () => {
  //const [isLogined, setIsLogined] = useState(false)
  return (
    <StylesProvider injectFirst>
      <base href={web_protocol + frontend}/>
      <BrowserRouter>
        {/*<Logined.Provider value={isLogined}>*/}
        <NavMenu/>
        <Container>
          <Switch>
            <Route path="/ru/auth" component={Auth}/>
            <Route path="/ru/партия" component={Game}/>
            <Route path="/ru/играть" component={StartGame}/>
            <Route path="/" component={Article}/>
          </Switch>
        </Container>
        {/*</Logined.Provider>*/}
      </BrowserRouter>
    </StylesProvider>
  )
}
