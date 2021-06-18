import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import HealingIcon from '@material-ui/icons/Healing';
import Toolbar from '@material-ui/core/Toolbar';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import EmailIcon from '@material-ui/icons/Email';
import ChatIcon from '@material-ui/icons/Chat';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto"
  },
}));

const icons=[
  <DashboardIcon />,
   <PersonIcon />,
   <AddAlertIcon />,
   <EmailIcon />,
  <CalendarTodayIcon />,
  <ChatIcon />
]

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div>
   
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
      
        <Divider />
        <List >
          {['Dashboard', 'Profile', 'Reminders', 'Messages','Calender',"Chatbot"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{icons[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
     
      </div>
  );
}