import React, {useEffect} from 'react'
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


export const Game = () => {

  let websocket = new WebSocket('ws://localhost:8000/games')
  useEffect(() => {
    const ws = () => websocket.send('{"cmd": "show_games", "jwt": "' + localStorage.getItem('token') + '"}')
    setTimeout(ws, 2000)
  }, [])

  const formik = useFormik({
    initialValues: {
      chess_variant: 'yin-yang',
      color: 'random',
    },
    onSubmit: (values) => {
      console.log(values)
      alert(JSON.stringify(values));
    },
  });

  websocket.onmessage = function (e) {
    console.log(e.data)
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
                    <FormControlLabel value="yin-yang" control={<Radio/>} label="Инь-ян"/>
                    <FormControlLabel value="flank" control={<Radio/>} label="Фланговая"/>
                    <FormControlLabel value="yin-yang_flank" control={<Radio/>} label="Инь-ян / Фланговая"/>
                    <FormControlLabel value="yin-yang_fibonacci" control={<Radio/>} label="Инь-ян / Фибоначчи"/>
                    <FormControlLabel value="classic" control={<Radio/>} label="Класические"/>
                    <FormControlLabel value="960" control={<Radio/>} label="Фишера 960"/>
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
            <Typography>Присоединится к игре</Typography>
            <Box mt={2}>
              <Card variant="outlined">
                <Box p={2} display="flex">
                  <Box mr={2}>
                    <Avatar aria-label="recipe">
                      И
                    </Avatar>
                  </Box>
                  <Box display="flex" style={{"flexDirection": "column"}}>
                    <Typography style={{"textAlign": "left"}}>Инь-ян</Typography>
                    <Typography style={{"textAlign": "left", "color": "rgba(0, 0, 0, 0.54)"}}>Черными</Typography>
                  </Box>
                  <Grid container justify="flex-end" spacing={8}>
                    <Grid item>
                      <Button color="primary">Присоединиться</Button>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </Box>


            <div style={{"margin": "10px 0", "padding": "10px 0", "border": "1px solid"}}>
              Шахматный вариант_ белыми __ с игроком
            </div>
            <div style={{"margin": "10px 0", "padding": "10px 0", "border": "1px solid"}}>
              Шахматный вариант_ черными __ с игроком
            </div>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}