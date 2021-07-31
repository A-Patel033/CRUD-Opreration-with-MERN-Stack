import React from 'react';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header: {
        background: '#111111',
    },
    tabs: {
        color: "white",
        textDecoration: "none",
        marginRight: 25,
        fontSize: 15,
        '&:hover': {
            color: " #08dbf7ef",
            transition: "all 0.2s ease- out"
        }
    },
    title: {
        color: "white",
        textDecoration: "none",
        marginRight: 25,
        fontSize: 22,
        '&:hover': {
            color: " #08dbf7ef",
            transition: "all 0.2s ease- out"
        }
    }
})

function NavBar() {
    const classes = useStyle();

    return (
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <NavLink className={classes.title} to="/" exact>CRUD With MERN Stack <i className="fab fa-typo3" /></NavLink>
                <NavLink className={classes.tabs} to="/allUsers" exact>All Users</NavLink>
                <NavLink className={classes.tabs} to="/addUser" exact>Add User</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
