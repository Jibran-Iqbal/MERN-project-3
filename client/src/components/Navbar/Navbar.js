import { AppBar, Tab, Tabs, Toolbar, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import memories from '../../Images/memories.png'
import useStyles from './styles'



const Navbar = () => {

    const [value,setValue] = useState(0);
    const classes = useStyles();

    return (
    <AppBar className={classes.appBar} position="static" color="inherit" >
        <div className={classes.brandContainer}>
            <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
            <Link to="/">
                <img className={classes.image} src={memories} alt="memories" height="60"/>
            </Link>
        </div>
        <Toolbar className={classes.toolbar} >
            <Tabs sx={{m:"auto"}} textColor='inherit' indicatorColor="primary" value={value} onChange={(e,val)=>setValue(val)} >
                <Tab className={classes.bt} component={Link} to="/" label="Posts" />
                <Tab className={classes.bt} component={Link} to="/about" label="About Us" />
            </Tabs>
        </Toolbar>
    </AppBar>
    )
}

export default Navbar
