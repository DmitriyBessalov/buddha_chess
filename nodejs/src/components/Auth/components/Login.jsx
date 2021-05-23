import React from 'react';
import {Link} from "react-router-dom";
import {
    Typography,
    TextField,
    FormControlLabel,
    Grid,
    Button,
    Checkbox
} from '@material-ui/core';
import classes from '../Auth.module.css'


export const Login = () => {
    const [email, setEmail] = React.useState(localStorage.getItem('email'))
    const [password, setPassword] = React.useState(localStorage.getItem('password'))
    const [rememberPassword, setRememberPassword] = React.useState(false)

    const [passwordError, setPasswordError] = React.useState(null)
    const [passwordHelperText, setPasswordHelperText] = React.useState(null)

    const [formSend, setFormSend] = React.useState(false)

    const onChangeEmail = event => {
        setEmail(event.target.value)
    }

    const onChangePassword = event => {
        setPassword(event.target.value)
    }

   const onChangeRememberPassword = event => {
        setRememberPassword(event.target.checked)
    }

    const FormSubmit = (event) => {
        const _json = '{"email":"' + email + '","username":"' + email + '","password":"' + password + '"}'
        console.log(_json)
        fetch('/api/auth/token', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: _json
        }).then(
            async response => ({
                status: response.status,
                body: await response.text(),
            })
        ).then(response => {
            console.log(JSON.parse(response.body).token)
            if (response.status === 200){
                setPasswordError(false)
                setPasswordHelperText(null)
                localStorage.setItem('token', JSON.parse(response.body).token)
                localStorage.setItem('email', email)
                if (rememberPassword) {
                    localStorage.setItem('password', password)
                }
                setFormSend(true)
            } else if (response.status === 400){
                if (JSON.parse(response.body).non_field_errors !== undefined) {
                    setPasswordError(true)
                    setPasswordHelperText(JSON.parse(response.body).non_field_errors)
                }
            }
        })
    }

   return (
       <>
           {   formSend
               ?   <Typography>
                       Вы залогинились
                   </Typography>
               :   <form noValidate>
                       <Typography variant="h1" className={classes.h1}>
                          Авторизация
                       </Typography>

                       <TextField label="Email адрес" variant="outlined" className={classes.input} required
                           onChange={onChangeEmail}
                           value={email}
                           error={passwordError}
                       />

                       <TextField label="Пароль" variant="outlined" className={classes.input} type="password" required
                           onChange={onChangePassword}
                           value={password}
                           error={passwordError}
                           helperText={passwordHelperText}
                       />

                       <Grid container direction="row" justify="space-between" alignItems="center" className={classes.grid}>
                           <FormControlLabel
                              control={
                                <Checkbox
                                  name="checked"
                                  color="primary"
                                  onChange={onChangeRememberPassword}
                                  checked={rememberPassword}
                                />
                              }
                              label="Запомнить пароль"
                           />
                           <Link to="/auth/reset_password">Забыли пароль</Link>
                       </Grid>
                       <Button className={classes.buttonW100} variant="contained" onClick={FormSubmit} >Войти</Button>
                   </form>
           }
       </>
   )
}
