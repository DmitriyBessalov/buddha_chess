import React, {useEffect, useRef} from "react";
import {Typography} from "@material-ui/core";


export const Activation = (props) => {
    const [result, setResult] = React.useState(null)
    const renderCount = useRef(1)

    const _json = '{"uid":"' + props.match.params.uid + '","token":"' + props.match.params.token + '"}'
    console.log (_json)

    useEffect(() => {
        renderCount.current++
        if (renderCount.current === 2){

            fetch('/api/auth/users/activation/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: _json
            }).then(response => response.json()
                .then(data => ({
                    status: response.status,
                    data: data,
                    })
                ).then(response => {
                    console.log(response.data)
                    let str = 'Ошибка подтверждения email.'
                    if (response.data.detail !== undefined) {
                        str = str + ' ' + response.data.detail
                    }
                    if (response.data.uid !== undefined) {
                        str = str + ' ' + response.data.uid
                    }
                    if (response.data.token !== undefined) {
                        str = str + ' ' + response.data.token
                    }
                    setResult(str)
                })
            ).catch(
                response => setResult('Вы успешно подтвердили email')
            )

        }
    })

    return (
    <>
        <Typography>{result}</Typography>
    </>
    )
}

