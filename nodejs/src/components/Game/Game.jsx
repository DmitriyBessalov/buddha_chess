import React, {useEffect} from 'react'
import {Button, Grid} from '@material-ui/core'
import {Paper} from '@material-ui/core'
import {FormControl} from '@material-ui/core'
import {RadioGroup} from '@material-ui/core'
import {FormControlLabel} from '@material-ui/core'
import {Radio} from '@material-ui/core'

export const Game = () => {
  const [value, setValue] = React.useState('yin-yang')

  const handleChange = (event) => {
    setValue(event.target.value)
  }
  return (
    <>
    <Grid container spacing={3} style={{"padding-top": "40px"}}>
        <Grid item xs={6} style={{"text-align":"center"}}>
            <Paper style={{"min-height":"200px"}}>
            <p>Создать игру</p>
                  <FormControl component="fieldset">
                  <RadioGroup aria-label="gender" name="chess_variant" value={value} onChange={handleChange}>
                    <FormControlLabel value="classic" control={<Radio />} label="Класические" />
                    <FormControlLabel value="960" control={<Radio />} label="Фишера" />
                    <FormControlLabel value="yin-yang" control={<Radio />} label="Инь-ян" />
                    <FormControlLabel value="simple" control={<Radio />} label="Простые" />
                    <FormControlLabel value="mixed" control={<Radio />} label="Смешанные" />
                    <FormControlLabel value="golden-order" control={<Radio />} label="Золотого порядка" />
                    <Button variant="contained" style={{"margin": "10px"}}>Выбрать</Button>
                  </RadioGroup>
                </FormControl>
            </Paper>
        </Grid>
        <Grid item xs={6} style={{"text-align":"center"}}>
            <Paper style={{"min-height":"200px"}}>
                <p>Присоединится к игре</p>
                <div style={{"margin": "10px", "padding":"10px","border":"1px solid"}}>
                    sd
                </div>
                <div style={{"margin": "10px", "padding":"10px", "border":"1px solid"}}>
                    sd
                </div>
            </Paper>
        </Grid>
    </Grid>
    </>
  )
}