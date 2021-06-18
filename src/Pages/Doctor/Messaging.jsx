import React from 'react';
import MessageApp from '../Messaging/MessageApp'
import Container from '@material-ui/core/Container';
import Sidebar from './Sidebar.jsx'
import CssBaseline from '@material-ui/core/CssBaseline';
import {useStyles} from './Styling';

function Messaging()
{
    const classes = useStyles();

    return(
        <div className={classes.root}>
        <CssBaseline />
        <Sidebar />
        <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <MessageApp />
        </Container>
        </main>
        </div>
    )
}

export default Messaging;