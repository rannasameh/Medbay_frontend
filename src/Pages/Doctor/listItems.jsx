import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MessageIcon from '@material-ui/icons/Message';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import history from '../../history';
import dashboard from './Pictures/dashboard.png';
import user from './Pictures/user.png';
import patient from './Pictures/patient.png';
import chat from './Pictures/chat.png';
import logout from './Pictures/logout.png';


export const mainListItems = (
  <div style={{ color: 'white' }}>
    <ListItem button onClick={() => history.push("/DoctorDashboard")}>
      <ListItemIcon>
        <img src={dashboard} alt="Dashboard icon" style={{ height: '27px', width: '27px' }} />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button onClick={() => history.push("/DoctorProfile")}>
      <ListItemIcon>
        <img src={user} alt="User icon" style={{ height: '27px', width: '27px' }} />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
    <ListItem button onClick={() => history.push("/ViewPatients")}>
      <ListItemIcon>
        <img src={patient} alt="Patient icon" style={{ height: '27px', width: '27px' }} />
      </ListItemIcon>
      <ListItemText primary="Patients" />
    </ListItem>
    <ListItem button onClick={() => history.push("/DoctorMessaging")}>
      <ListItemIcon>
        <img src={chat} alt="Messages icon" style={{ height: '27px', width: '27px' }} />
      </ListItemIcon>
      <ListItemText primary="Messages" />
    </ListItem>
   
  </div>
);

export const secondaryListItems = (
  <div style={{ color: 'white' }}>
    <ListItem button onClick={() => {  localStorage.clear()
      history.push("/")
  
    }}>
      <ListItemIcon>
       <img src={logout} alt="Logout icon" style={{ height: '27px', width: '27px' }} />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  </div>
);