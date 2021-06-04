import React, {useEffect} from 'react'
import {Button, Grid, makeStyles} from '@material-ui/core'
import {Paper} from '@material-ui/core'
import {FormControl} from '@material-ui/core'
import {RadioGroup} from '@material-ui/core'
import {FormControlLabel} from '@material-ui/core'
import {Radio} from '@material-ui/core'
import {Select} from '@material-ui/core';
import {MenuItem} from '@material-ui/core';
import {InputLabel} from '@material-ui/core';
import {Box} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const StartGame = () => {
    const classes = useStyles();

    const [value, setValue] = React.useState('yin-yang')
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleChange2 = (event) => {
        const name = event.target.name;
        setState({
            ...state,
        [name]: event.target.value,
        });
    };

  return (
    <>
    <Grid container spacing={3} style={{"padding-top": "40px"}}>
        <Grid item xs={6} >
            <Paper style={{"min-height":"400px", "padding":"15px"}}>
                <p style={{"text-align":"center"}}>Создать новую игру</p>
                <Box display="flex" style={{"flex-direction": "column"}}>
                    <FormControl component="fieldset" style={{"width":"100%"}}>
                      <RadioGroup aria-label="gender" name="chess_variant" value={value} onChange={handleChange}>
                        <FormControlLabel value="yin-yang" control={<Radio />} label="Инь-ян" />
                        <FormControlLabel value="simple" control={<Radio />} label="Простые" />
                        <FormControlLabel value="mixed" control={<Radio />} label="Смешанные" />
                        <FormControlLabel value="golden-order" control={<Radio />} label="Золотого порядка" />
                        <FormControlLabel value="classic" control={<Radio />} label="Класические" />
                        <FormControlLabel value="960" control={<Radio />} label="Фишера" />
                      </RadioGroup>
                    </FormControl>
                    <FormControl variant="outlined" style={{"margin":"15px"}} className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Цвет фигур</InputLabel>
                        <Select native
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Цвет фигур"
                            // value={pieceColor}
                                value={state.age}
                            onChange={handleChange2}
                        >
                            <option aria-label="None" value="" />
                          <option value="random">Любой</option>
                          <option value="while">Белые</option>
                          <option value="black">Черные</option>
                        </Select>
                    </FormControl>
                    <Button variant="contained" style={{"margin": "0 auto", "text-align":"center"}}>Создать</Button>
                </Box>
            </Paper>
        </Grid>
        <Grid item xs={6} style={{"text-align":"center"}}>
            <Paper style={{"min-height":"400px", "padding":"15px"}}>
                <p>Присоединится к игре</p>
                <div style={{"margin": "10px 0", "padding":"10px 0","border":"1px solid"}}>
                    Шахматный вариант_ белыми __ с игроком
                </div>
                <div style={{"margin": "10px 0", "padding":"10px 0", "border":"1px solid"}}>
                    Шахматный вариант_ черными __ с игроком
                </div>
            </Paper>
        </Grid>
    </Grid>
    </>
  )
}