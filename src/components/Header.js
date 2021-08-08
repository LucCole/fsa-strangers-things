import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    toolBar: {
        display: "flex",
    },
    siteTitle: {
        flexGrow: 1,
    },
    button: {
        margin: "0 10px",
    },
    link: {
        textDecoration: "none",
        color: "inherit",
    },
}))

const Header = ({isLoggedIn, setToken, setUserData, token, setPosts, setPost}) => {

    const onLogOutClick = async () => {
        localStorage.removeItem('st-token');
        setToken('');
        setUserData({});
        setPosts([])
        setPost(null)
    };

    const classes = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar className={classes.toolBar} >

                    <Typography className={classes.siteTitle} variant="h6" noWrap>
                        Stranger's Things
                    </Typography>
                    
                    {isLoggedIn ? (
                        <>

                            <Button variant="contained" className={classes.button}>
                                <Link color="inherit" className={classes.link} to="/account">My Stuff</Link>
                            </Button>
                        </>
                    ) : null
                    }

                    <Button variant="contained" className={classes.button}>
                        <Link className={classes.link} to="/posts">View All Posts</Link>
                    </Button>

                    {isLoggedIn ? (
                        <>
                            <Button variant="contained" className={classes.button}>
                                <Link className={classes.link} to="/post-form">Create Post</Link>
                            </Button>
                            <Button  onClick={onLogOutClick} variant="contained" className={classes.button}>
                                Log Out
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button variant="contained" className={classes.button}>
                                <Link className={classes.link} to="/login">Login</Link>
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header