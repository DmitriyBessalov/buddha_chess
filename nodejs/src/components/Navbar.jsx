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
            <Button variant="contained" style={{"margin": "10px"}}>Главная</Button>
        </Link>
        <Button variant="contained" style={{"margin": "10px"}}>Каталог</Button>
        {   isLogin
            ?   <>
                    <Button aria-describedby={id} variant="contained" style={{"margin": "10px"}} onClick={handleClick}>
                        Юзернайм
                    </Button>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                        transformOrigin={{vertical: 'top', horizontal: 'center'}}
                    >
                        <Link to="/auth/logout">
                            <MenuItem>Выход</MenuItem>
                        </Link>
                    </Popover>
                </>
            :   <>
                    <Link to="/auth/users">
                        <Button variant="contained" style={{"margin": "10px"}}>
                            Регистрация
                        </Button>
                    </Link>
                    <Link to="/auth/login">
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

