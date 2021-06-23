import React, {useContext} from 'react';
import {
  Container,
//  Popover,
  Button,
//  MenuItem
} from '@material-ui/core';

//import MenuIcon from '@material-ui/icons/Menu';
//import useMediaQuery from '@material-ui/core/useMediaQuery';
//import {Link} from "react-router-dom";

//import {Logined} from '../App'

export const NavMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isLoginen, setIsLogin] = React.useState(false)

  //const isLogin = useContext(isLoginen)
  let Login = false
  if (localStorage.getItem('token') !== null) Login = true
  //console.log(localStorage.getItem('token'))
  if (Login !== isLoginen) setIsLogin(true)
  const Logout = (event) => {
    localStorage.removeItem('token')
    window.location.reload()
  }

  //if (useMediaQuery('(min-width:1024px)')){
  return (
    <Container>
      <a href="/">
        <Button variant="contained" style={{"margin": "10px"}}>Документация</Button>
      </a>
      <a href="/ru/играть">
        <Button variant="contained" style={{"margin": "10px"}}>Играть</Button>
      </a>
      {isLoginen
        ? <>
          <Button variant="contained" style={{"float": "right", "margin": "10px"}} onClick={Logout}>
            Выход
          </Button>
          <Button variant="contained" style={{"float": "right", "margin": "10px"}}>
            {localStorage.getItem('email')}
          </Button>
        </>
        : <>
          <a href="/ru/auth/login" style={{"float": "right"}}>
            <Button variant="contained" style={{"margin": "10px"}}>
              Авторизация
            </Button>
          </a>
          <a href="/ru/auth/users" style={{"float": "right"}}>
            <Button variant="contained" style={{"margin": "10px"}}>
              Регистрация
            </Button>
          </a>
        </>
      }
    </Container>
  )
  // }else{
  //     return (
  //       <AppBar>
  //         <Toolbar>
  //         <IconButton edge="start" color="inherit" aria-label="menu">
  //            <MenuIcon />
  //         </IconButton>
  //         </Toolbar>
  //       </AppBar>
  //     )
  //}
}

