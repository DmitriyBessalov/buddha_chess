import React from 'react';
import {Button, TextField, Typography} from "@material-ui/core";
import classes from "../Auth.module.css";

export const ResendActivation = () => {
    const [email, setEmail] = React.useState(localStorage.getItem('email'))
    const [emailError, setEmailError] = React.useState(false)
    const [formSend, setFormSend] = React.useState(false)

    const onChangeEmail = event => {
        setEmail(event.target.value)
    }

    const FormSubmit = (event) => {
        const _json = '{"email":"' + email + '"}'
        console.log(_json)
        fetch('/api/auth/users/resend_activation/', {
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
                }else if (response.status === 400){
                    setEmailError(true)
                }
            }
        )
    }

    return (
        <>
            {   formSend
                ?   <Typography>
                        Повторное письмо отправлено
                    </Typography>
                :   <form noValidate>
                        <Typography variant="h1" className={classes.h1}>
                            Повторное подтверждение Email
                        </Typography>
                        <TextField
                            label="Email адрес"
                            variant="outlined"
                            className={classes.input}
                            value={email}
                            onChange={onChangeEmail}
                            error={emailError}
                        />
                        <Button className={classes.buttonW100} variant="contained" onClick={FormSubmit}>
                            Отправить
                        </Button>
                    </form>
            }
        </>
    )
}