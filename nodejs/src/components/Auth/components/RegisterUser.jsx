import React from 'react';
import {Link} from "react-router-dom";
import {Typography, TextField, Grid, Button} from '@material-ui/core';
import classes from '../Auth.module.css'
import {web_protocol, backend} from "../../conf";

export const RegisterUser = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const [emailError, setEmailError] = React.useState(null)
  const [passwordError, setPasswordError] = React.useState(null)
  const [emailHelperText, setEmailHelperText] = React.useState(null)
  const [passwordHelperText, setPasswordHelperText] = React.useState(null)

  const [formSend, setFormSend] = React.useState(false)

  const onChangeEmail = event => {
    setEmail(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const FormSubmit = (event) => {
    if (password.length > 5) {
      const _json = '{"email":"' + email + '","username":"' + email + '","password":"' + password + '"}'
      console.log(_json)
      fetch(web_protocol + backend + '/api/auth/users/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: _json
      }).then(
        async response => ({
          status: response.status,
          body: await response.text(),
        })
      ).then(
        response => {
          if (response.status === 201) {
            localStorage.setItem('email', JSON.parse(response.body).email)
            setFormSend(true)
          } else if (response.status === 400) {
            if (JSON.parse(response.body).email !== undefined) {
              setEmailHelperText(JSON.parse(response.body).email)
              setEmailError(true)
            } else {
              setEmailHelperText('')
              setEmailError(false)
            }
            if (JSON.parse(response.body).password !== undefined) {
              setPasswordHelperText(JSON.parse(response.body).password)
              setPasswordError(true)
            } else {
              setPasswordHelperText('')
              setPasswordError(false)
            }
          }
        }
      )
    } else {
      setPasswordHelperText('?????????????????????? ?????????? ???????????? 6 ????????????????')
      setPasswordError(true)
    }
  }

  return (
    <>
      {formSend
        ? (
          <>
            <Typography>
              ???? ????????????????????????????????????.
            </Typography>
            <Typography>
              ?????? ?????????????????????? ?????????????????????? ?????? ??????????, ???????????? ????????????????????.
            </Typography>
            <Typography>
              ???????? ???????????? ???? ???????????? <Link to="/auth/users/resend_activation">?????????????????? ??????????????????</Link>
            </Typography>
          </>
        ) : (
          <form noValidate>
            <Typography variant="h1" className={classes.h1}>
              ??????????????????????
            </Typography>

            <TextField label="Email ??????????" variant="outlined" className={classes.input} required
                       onChange={onChangeEmail}
                       value={email}
                       error={emailError}
                       helperText={emailHelperText}
            />

            <TextField label="????????????" variant="outlined" className={classes.input} type="password" required
                       onChange={onChangePassword}
                       value={password}
                       error={passwordError}
                       helperText={passwordHelperText}
            />

            <Grid container direction="row" justify="flex-end" alignItems="center" className={classes.grid}>
              <Link to="/aunf/login">?????? ??????????????????????????????????</Link>
            </Grid>

            <Button className={classes.buttonW100} variant="contained" onClick={FormSubmit}>????????????????????????????????????</Button>
          </form>
        )
      }
    </>
  )
}
