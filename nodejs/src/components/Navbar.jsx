import React from 'react';
import {
  Container,
  Button,
} from '@material-ui/core';



export const NavMenu = () => {
  const [isLoginen, setIsLogin] = React.useState(false)
  let Login = false
  if (localStorage.getItem('token') !== null) Login = true
  if (Login !== isLoginen) setIsLogin(true)
  const Logout = (event) => {
    localStorage.removeItem('token')
    window.location.reload()
  }

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
}

