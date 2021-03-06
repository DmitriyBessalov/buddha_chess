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
import {web_protocol, backend, frontend} from "../../conf";

export const Login = () => {
  const [email, setEmail] = React.useState(localStorage.getItem('email'))
  const [password, setPassword] = React.useState(localStorage.getItem('password'))
  const [rememberPassword, setRememberPassword] = React.useState(true)

  const [passwordError, setPasswordError] = React.useState(null)
  const [passwordHelperText, setPasswordHelperText] = React.useState(null)

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
    fetch(web_protocol + backend + '/api/auth/token', {
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
      if (response.status === 200) {
        setPasswordError(false)
        setPasswordHelperText(null)
        localStorage.setItem('token', JSON.parse(response.body).token)
        localStorage.setItem('email', email)
        if (rememberPassword) {
          localStorage.setItem('password', password)
        }
        window.location.replace(web_protocol + frontend)
      } else if (response.status === 400) {
        if (JSON.parse(response.body).non_field_errors !== undefined) {
          setPasswordError(true)
          setPasswordHelperText(JSON.parse(response.body).non_field_errors)
        }
      }
    })
  }

  return (
    <>
      <form noValidate>
        <Typography variant="h1" className={classes.h1}>
          ??????????????????????
        </Typography>

        <TextField label="Email ??????????" variant="outlined" className={classes.input} required
                   onChange={onChangeEmail}
                   value={email}
                   error={passwordError}
        />

        <TextField label="????????????" variant="outlined" className={classes.input} type="password" required
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
            label="?????????????????? ????????????"
          />
          <Link to="/auth/reset_password">???????????? ????????????</Link>
        </Grid>
        <Button className={classes.buttonW100} variant="contained" onClick={FormSubmit}>??????????</Button>
      </form>
    </>
  )
}
