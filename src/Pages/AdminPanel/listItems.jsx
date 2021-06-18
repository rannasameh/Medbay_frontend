import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ReportIcon from '@material-ui/icons/Report';
import StarRateIcon from '@material-ui/icons/StarRate';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import SettingsIcon from '@material-ui/icons/Settings';
import history from "../../history.js";

export const mainListItems = (
  <div style={{ color: 'white' }}>
    <ListItem button onClick = {() => history.push("/Home")}>
      <ListItemIcon style ={{color:'white'}}>
       <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button onClick = {() => history.push("/VerifyDoctor")}>
      <ListItemIcon style ={{color:'white'}}>
       <VerifiedUserIcon />
      </ListItemIcon>
      <ListItemText primary="Verify Doctor" />
    </ListItem>
    <ListItem button onClick = {() => history.push("/BanAccount")}>
      <ListItemIcon style ={{color:'white'}}> 
        <PersonPinIcon />
      </ListItemIcon>
      <ListItemText primary="Ban Account" />
    </ListItem>
    <ListItem button onClick = {() => history.push("/ViewReports")}>
      <ListItemIcon style ={{color:'white'}}>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary="View Reports" />
    </ListItem>
    <ListItem button onClick = {() => history.push("/ViewRatings")}>
      <ListItemIcon>
        <StarRateIcon style={{ color: 'white' }} />
      </ListItemIcon>
      <ListItemText primary="View Ratings" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div style={{ color: 'white' }}>
    <ListItem button onClick = {() => history.push("/Settings")}>
    <ListItemIcon>
        <SettingsIcon style={{ color: 'white' }} />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </div>
);