import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MessageIcon from '@material-ui/icons/Message';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AdbIcon from '@material-ui/icons/Adb';
import history from '../../history';
import user from './Pictures/user.png';
import dashboard from './Pictures/dashboard.png';
import reminder from './Pictures/reminder2.png';
import chat from './Pictures/chat.png';
import bot from './Pictures/health-report.png';
import logout from './Pictures/logout.png';
import DisclaimerPage from './DisclaimerPage';



export const mainListItems = (
  <div style={{color: 'white'}}>
    <ListItem button onClick={()=>history.push("/PatientDashboard")}>
      <ListItemIcon>
      <img src={dashboard} alt="Dashboard icon" style={{height:'27px', width:'27px'}}/>
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button onClick={()=>history.push("/PatientProfile")}>
      <ListItemIcon>
      <img src={user} alt="User icon" style={{height:'27px', width:'27px'}}/>
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
    <ListItem button onClick={() => history.push("/PatientRemindersPage")}>
      <ListItemIcon>
      <img src={reminder} alt="Reminder icon" style={{height:'27px', width:'27px'}}/>
      </ListItemIcon>
      <ListItemText primary="Reminders" />
    </ListItem>
    <ListItem button onClick={() => history.push("/PatientMessaging")}>
      <ListItemIcon>
      <img src={chat} alt="Messages icon" style={{height:'27px', width:'27px'}}/>
      </ListItemIcon>
      <ListItemText primary="Messages" />
    </ListItem>
    <ListItem button onClick={() => history.push("/DisclaimerPage")}>
      <ListItemIcon>
      <img src={bot} alt="Bot icon" style={{height:'27px', width:'27px'}}/>
      </ListItemIcon>
      <ListItemText primary="Symptoms Checker" />
    </ListItem>

  </div>
);


export const secondaryListItems = (
  <div style={{color: 'white'}}>
    <ListItem button onClick={() => {  localStorage.clear()
      history.push("/")
  
    }}>
      <ListItemIcon>
      <img src={logout} alt="Logout icon" style={{height:'27px', width:'27px'}}/>
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
    </div>
);