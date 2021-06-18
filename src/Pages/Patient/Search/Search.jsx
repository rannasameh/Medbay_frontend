import React from 'react';
import { useStyles } from '../Styling'
import Sidebar from '../Sidebar'
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchPage from "../../SearchPage"
import Box from '@material-ui/core/Box';
import Copyright from '../Copyright';

export function Search() {
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <CssBaseline />
            <Sidebar />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <SearchPage />
                <Box pt={4}>
                    <Copyright />
                </Box>
            </main>
        </div>
    );
}

export default Search;