
import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Sidebar from "./Sidebar.jsx";
import { useStyles } from './Styling';
import Disclaimer from './DisclaimerText.js';
import { Button } from 'antd';

function DisclaimerPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Disclaimer />
          <Button  variant="contained" size="small"  style={{ backgroundColor: "#01579b" ,color:"white ",padding:'10px',position: "absolute",bottom: "40px",right:'150px'}} onClick={() => {
            window.open('//localhost:3001');
          }}>Go to symptom checker!</Button>
        </Container>
      </main>
    </div>
  );
};

export default DisclaimerPage;