import React from "react";
import {Button, TextField, Typography} from "@material-ui/core";
import classes from "../Auth.module.css";


export const ResetPasswordConfirm = (props) => {
    const [formSend, setFormSend] = React.useState(false)
    const [newPassword, setNewPassword] = React.useState(null)
    const [newPassword2, setNewPassword2] = React.useState(null)
    const [newPasswordError, setNewPasswordError] = React.useState(null)
    const [newPasswordHelperText, setNewPasswordHelperText] = React.useState(null)

    const onChangeNewPassword = event => {
        setNewPassword(event.target.value)
    }

    const onChangeNewPassword2 = event => {
        setNewPassword2(event.target.value)
    }

    const FormSubmit = (event) => {
        const _json = '{"uid":"' + props.match.params.uid + '","token":"' + props.match.params.token + '","new_password":"' + newPassword + '"}'

        if (newPassword === newPassword2){
            if (newPassword.length > 5){
                setNewPasswordHelperText('')
                setNewPasswordError(false)
                fetch('/api/auth/users/reset_password_confirm/', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: _json
                }).then(
                    async response => ({
                        status: response.status,
                        body: await response.text(),
                    })
                ).then(
                    response=>{
                        if (response.status === 204) {
                             setFormSend(true)
                        } else if (response.status === 400){
                            if (JSON.parse(response.body).uid){
                                setNewPasswordHelperText(JSON.parse(response.body).uid)
                            }
                            if (JSON.parse(response.body).token){
                                setNewPasswordHelperText(JSON.parse(response.body).token)
                            }
                            if (JSON.parse(response.body).new_password){
                                setNewPasswordHelperText(JSON.parse(response.body).new_password)
                            }
                            setNewPasswordError(true)
                        }
                    }
                )
            }else{
                setNewPasswordHelperText('Минимальная длина пароля 6 символов')
                setNewPasswordError(true)
            }
        }else{
            setNewPasswordHelperText('Пароли разные')
            setNewPasswordError(true)
        }
    }

    return (
        <>
            {   formSend
                ?   <Typography>
                        Пароль успешно изменён
                    </Typography>
                :   <form noValidate>
                        <Typography variant="h1" className={classes.h1}>
                            Установите новый пароль
                        </Typography>
                        <TextField
                            label="Введите новый пароль"
                            variant="outlined"
                            className={classes.input}
                            value={newPassword}
                            onChange={onChangeNewPassword}
                            error={newPasswordError}
                        />
                        <TextField
                            label="Повторите новый пароль"
                            variant="outlined"
                            className={classes.input}
                            value={newPassword2}
                            onChange={onChangeNewPassword2}
                            error={newPasswordError}
                            helperText={newPasswordHelperText}
                        />
                        <Button className={classes.buttonW100} variant="contained" onClick={FormSubmit}>
                            Отправить
                        </Button>
                    </form>
            }
        </>
    )
}

