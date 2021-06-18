import React, {useState, useEffect} from 'react'
import {Button} from '@material-ui/core'
import {Grid} from '@material-ui/core'
import {Paper} from '@material-ui/core'
import {FormControl} from '@material-ui/core'
import {RadioGroup} from '@material-ui/core'
import {FormControlLabel} from '@material-ui/core'
import {Radio} from '@material-ui/core'
import {Select} from '@material-ui/core';
import {InputLabel} from '@material-ui/core';
import {Box} from '@material-ui/core';
import {useFormik} from 'formik';
import {Card} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import {Avatar} from '@material-ui/core';


let websocket
const ws = () => {
  websocket = new WebSocket('ws://localhost:8000/ws/games')
  websocket.onclose = () => {
    setTimeout(ws, 500)
  }
}
ws()

export const Game = () => {
  const [gameList, setGameList] = React.useState({})

  useEffect(() => {
    const ws_open = () => {
      console.log(websocket.readyState)
      if (websocket.readyState === 1) {
        websocket.send('{"cmd": "show_games", ' +
          '"jwt": "' + localStorage.getItem('token') +
          '"anonimous_jwt": "' + localStorage.getItem('anonimous_jwt') + '"}')
      } else {
        setTimeout(ws_open, 200)
      }
    }
    ws_open()
  }, [])

  const formik = useFormik({
    initialValues: {
      chess_variant: "2",
      color: 'while',
    },
    onSubmit: (values) => {
      values['cmd'] = "create_game"
      values['jwt'] = localStorage.getItem("jwt")
      values['anonimous_jwt'] = localStorage.getItem("anonimous_jwt")
      console.log(JSON.stringify(values))
      websocket.send(JSON.stringify(values))
    },
  });

  websocket.onmessage = function (e) {
    let message = JSON.parse(e.data)
    switch (message.cmd) {
      case "anonimous_login": {
        localStorage.setItem("anonimous_username", message.anonimous_username)
        localStorage.setItem("anonimous_jwt", message.anonimous_jwt)
        break
      }
      case "list_games": {
        setGameList(message.list_games)
      }
    }
  }

  const chess_variant = {
    "0": "Класические",
    "1": "Фишера 960",
    "2": "Инь-ян",
    "3": "Фланговая",
    "4": "Инь-ян / Фланговая",
    "5": "Инь-ян / Фибоначчи",
  }

  const color = {
    "random": "Любой",
    "while": "Белый",
    "black": "Черный",
  }

  const join_game = (e) => {
    console.log(e)
  }

  return (
    <>
      <Grid container spacing={3} style={{"paddingTop": "40px"}}>
        <Grid item xs={6}>
          <Paper style={{"minHeight": "400px", "padding": "15px"}}>
            <Typography style={{"textAlign": "center"}}>Создать новую игру</Typography>
            <form onSubmit={formik.handleSubmit}>
              <Box display="flex" style={{"flexDirection": "column"}}>
                <FormControl component="fieldset" style={{"width": "100%"}}>
                  <RadioGroup aria-label="gender" name="chess_variant" value={formik.values.chess_variant}
                              onChange={formik.handleChange}>
                    {Object.keys(chess_variant).map((item, i) => (
                      <FormControlLabel key={i} value={((i + 2) % 6).toString()} control={<Radio/>}
                                        label={chess_variant[(i + 2) % 6]}/>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormControl variant="outlined" style={{"margin": "15px"}}>
                  <InputLabel id="demo-simple-select-label">Цвет фигур</InputLabel>
                  <Select native name="color"
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Цвет фигур"
                          value={formik.values.color}
                          onChange={formik.handleChange}
                  >
                    <option value="random">Любой</option>
                    <option value="while">Белые</option>
                    <option value="black">Черные</option>
                  </Select>
                </FormControl>
                <Button variant="contained" type="submit"
                        style={{"margin": "0 auto", "textAlign": "center"}}>Создать</Button>
              </Box>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={6} style={{"textAlign": "center"}}>
          <Paper style={{"minHeight": "400px", "padding": "15px"}}>
            <Typography>Подключиться к играм:</Typography>
            {Object.keys(gameList).map((item, i) => (
              <Card key={gameList[i].game_id} id={gameList[i].game_id} variant="outlined" style={{"margin": "10px 0 0 0"}}>
                <Box p={2} display="flex">
                  <Box mr={2}>
                    <Avatar aria-label="recipe">
                      И
                    </Avatar>
                  </Box>
                  <Box display="flex" style={{"flexDirection": "column"}}>
                    <Typography style={{"textAlign": "left"}}>{chess_variant[gameList[i].chess_variant]}</Typography>
                    <Typography style={{"textAlign": "left"}}>{gameList[i].user}</Typography>
                    <Typography style={{
                      "textAlign": "left",
                      "color": "rgba(0, 0, 0, 0.54)"
                    }}>{color[gameList[i].color]}</Typography>
                  </Box>
                </Box>
                <Box display="flex" style={{"flexDirection": "column", "margin": "0 0 0 240px"}}>
                  <Button color="primary" style={{"textAlign": "left"}}
                          onClick={() => join_game(gameList[i].game_id)}>Присоединиться</Button>
                </Box>
              </Card>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}