import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HomeIcon from '@material-ui/icons/Home';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ReportIcon from '@material-ui/icons/Report';
import StarRateIcon from '@material-ui/icons/StarRate';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Chart from './Chart';
// import Header from "./Header";
// import Footer from "./Footer";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,

  },
  minibox:{
    border: '1px solid grey',
   
    // backgroundColor:'white',
    marginLeft: '30px',
    justifyContent: 'spaceBetween',
    borderRadius: '15px',
    width:'250px',
    textAlign: 'center',
//     color: 'blue',
  fontSize: '30px',
//     fontWeight: 'bold',
    padding: '50px',
    display: 'inline',
    paddingInline: '20px',
   alignItems: 'center',
   float:'left',
   marginTop: '1%',
//    borderStyle: "solid",
//    borderColor: 'blue',
  
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} {...a11yProps(0)} />
          <BottomNavigationAction label="Verify Doctor" icon={<VerifiedUserIcon />} {...a11yProps(1)} />
          <BottomNavigationAction label="Ban Account" icon={<PersonPinIcon />} {...a11yProps(2)} />
          <BottomNavigationAction label="View Reports" icon={<ReportIcon />} {...a11yProps(3)} />
          <BottomNavigationAction label="View Ratings" icon={<StarRateIcon />} {...a11yProps(4)} />
          {/* <Tab label="Item Six" icon={<ThumbDown />} {...a11yProps(5)} />
          <Tab label="Item Seven" icon={<ThumbUp />} {...a11yProps(6)} /> */}
          
          </BottomNavigation>
      </AppBar>
      <TabPanel value={value} index={0}>
       <Box className={classes.minibox}>
       <div>New Patients</div>
       <div>105</div></Box>
       <Box className={classes.minibox}> 
       <div>Total Patients</div>
       <div>1000</div></Box>
       <Box className={classes.minibox}> 
       <div>Doctors</div>
       <div>1000</div></Box>
       <Box className={classes.minibox}> 
       <div>Appointments</div>
       <div>1000</div></Box>
       <Chart />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
