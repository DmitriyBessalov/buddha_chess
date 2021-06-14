import React from "react";
import {Switch, Route} from "react-router-dom";
import {RegisterUser} from "./components/RegisterUser"
import {Login} from "./components/Login"
import {Activation} from "./components/Activation"
import {ResendActivation} from "./components/ResendActivation"
import {ResetPassword} from "./components/ResetPassword"
import {ResetPasswordConfirm} from "./components/ResetPasswordConfirm"
import classes from './Auth.module.css'

export const Auth = (props) => {
  return (
    <div className={classes.container}>
      <Switch>
        {/* Регистрация пользователя */}
        <Route path="/ru/auth/users" exact component={RegisterUser}/>

        {/* Повторная запрос активации */}
        <Route path="/ru/auth/users/resend_activation" component={ResendActivation}/>

        {/* Страница подтвержния активации email */}
        <Route path="/ru/auth/users/activation/:uid/:token" component={Activation}/>

        {/* Авторизация */}
        <Route path="/ru/auth/login" component={Login}/>

        {/* Сброс пароля */}
        <Route path="/ru/auth/reset_password" component={ResetPassword}/>

        {/* Сброс пароля подтверждение*/}
        <Route path="/ru/auth/users/password_reset_confirm/:uid/:token" component={ResetPasswordConfirm}/>

      </Switch>
    </div>
  )
}