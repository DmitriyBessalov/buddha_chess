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
import {ws_protocol, backend} from "../conf";

if (document.location.pathname === "/ru/%D0%B8%D0%B3%D1%80%D0%B0%D1%82%D1%8C")
  window.websocket = new WebSocket(ws_protocol + backend + '/ws/games')

export const StartGame = () => {
  const [gameList, setGameList] = useState({})

  useEffect(() => {
    const ws_init = () => {
      //console.log(websocket.readyState)
      switch (window.websocket.readyState) {
        case 0:
          setTimeout(ws_init, 500)
          break
        case 1:
          let values = {}
          values['cmd'] = "show_games"
          values['jwt'] = localStorage.getItem("jwt")
          values['anonimous_jwt'] = sessionStorage.getItem("anonimous_jwt")
          console.log(JSON.stringify(values))
          window.websocket.send(JSON.stringify(values))
          window.websocket.onclose = () => {
            ws_init()
          }
          break
        case 2:
        case 3:
          window.websocket.close()
          setTimeout(ws_init, 1600)
          break
        default:
      }
    }
    if (window.websocket.readyState !== 1)
      setTimeout(ws_init, 1000)
  }, [])


  window.websocket.onmessage = function (e) {
    let message = JSON.parse(e.data)

    switch (message.cmd) {
      case "anonimous_login": {
        sessionStorage.setItem("anonimous_username", message.anonimous_username)
        sessionStorage.setItem("anonimous_jwt", message.anonimous_jwt)
        break
      }
      case "join_game": {
        if (message.rival_black === localStorage.getItem("email") ||
          message.rival_white === localStorage.getItem("email") ||
          message.rival_black === sessionStorage.getItem("anonimous_username") ||
          message.rival_white === sessionStorage.getItem("anonimous_username")
        ) {
          sessionStorage.setItem("game_id_" + message.game_id, JSON.stringify(message))
          window.location.replace('/ru/партия/' + message.game_id)
        }
        break
      }
      default:
    }
    if (((message.cmd === "list_games") || (message.cmd === "join_game"))) {
      setGameList(message.list_games)
      Object.entries(message.list_games).forEach(([key, value]) => {
        setTimeout(rmGame, (value.ttl - 1) * 1000, value.game_id)
      })
    }

  }


  const formik = useFormik({
    initialValues: {
      chess_variant: "1",
      color: 'while',
    },
    onSubmit: (values) => {
      values['cmd'] = "create_game"
      values['jwt'] = localStorage.getItem("jwt")
      values['anonimous_jwt'] = sessionStorage.getItem("anonimous_jwt")
      values['position_960'] = Math.floor(Math.random() * 960)
      console.log(JSON.stringify(values))
      window.websocket.send(JSON.stringify(values))
    },
  });

  let rmGame = (_id) => {
    const elem = document.getElementById(_id)
    if (elem) elem.style.display = "none"
  }

  const chess_variant = {
    "1": "Инь-ян",
    "2": "Фланговая",
    "3": "Инь-ян / Фланговая",
    "4": "Инь-ян / Фибоначчи",
    "15": "Класические",
    "16": "Фишера 960",
  }

  const color = {
    "random": "Любой",
    "black": "Белый",
    "while": "Черный",
  }


  const join_game = (game_id) => {
    let values = {}
    values['cmd'] = "join_game"
    values['jwt'] = localStorage.getItem("jwt")
    values['anonimous_jwt'] = sessionStorage.getItem("anonimous_jwt")
    values['game_id'] = game_id
    console.log(JSON.stringify(values))
    window.websocket.send(JSON.stringify(values))
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
                    {Object.keys(chess_variant).map((item, i, h) => (
                      <FormControlLabel key={h[i]} value={h[i]} control={<Radio/>}
                                        label={chess_variant[parseInt(h[i])]}/>
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
              <Card key={gameList[i].game_id} id={gameList[i].game_id} variant="outlined"
                    style={{"margin": "10px 0 0 0"}}>
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
