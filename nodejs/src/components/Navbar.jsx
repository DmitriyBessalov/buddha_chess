import React, {useContext} from 'react';
import {
    Container,
    Popover,
    Button,
    MenuItem
} from '@material-ui/core';

//import MenuIcon from '@material-ui/icons/Menu';
//import useMediaQuery from '@material-ui/core/useMediaQuery';
import {Link} from "react-router-dom";

import {Logined} from '../App'


export const NavMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
//    const [isLoginen, setIsLogin] = React.useState(false)

    const isLogin = useContext(Logined)
    //let Login = false
    //if (localStorage.getItem('token')!==null) Login = true
    //if (Login !== isLogin) setIsLogin(Login)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
         setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    //if (useMediaQuery('(min-width:1024px)')){
    return (
    <Container>
        <Link to="/">
            <Button variant="contained" style={{"margin": "10px"}}>Документация</Button>
        </Link>
        <Link to="/ru/играть">
            <Button variant="contained" style={{"margin": "10px"}}>Играть</Button>
        </Link>
        {   isLogin
            ?   <>
                    <Button aria-describedby={id} variant="contained" style={{"margin": "10px"}} onClick={handleClick}>
                        Юзернейм
                    </Button>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                        transformOrigin={{vertical: 'top', horizontal: 'center'}}
                    >
                        <Link to="/ru/auth/logout">
                            <MenuItem>Выход</MenuItem>
                        </Link>
                    </Popover>
                </>
            :   <>
                    <Link to="/ru/auth/users" style={{"float": "right"}}>
                        <Button variant="contained" style={{"margin": "10px"}}>
                            Регистрация
                        </Button>
                    </Link>
                    <Link to="/ru/auth/login" style={{"float": "right"}}>
                        <Button variant="contained" style={{"margin": "10px"}}>
                            Авторизация
                        </Button>
                    </Link>
                </>
        }
    </Container>
    )
    // }else{
    //     return (
    //       <AppBar>
    //         <Toolbar>
    //         <IconButton edge="start" color="inherit" aria-label="menu">
    //            <MenuIcon />
    //         </IconButton>
    //         </Toolbar>
    //       </AppBar>
    //     )
    //}
}

