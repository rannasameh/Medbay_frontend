import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { StoreMallDirectorySharp } from '@material-ui/icons';

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#white',
    fontFamily: "Arial",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    color:'#01579b'
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),

  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',

  },
  fullHeight:
  {
      height: "100%",
  },
  biographyPaper:
  { 
    padding: '7%',
    width: 650,
    fontFamily: "Arial",
  },
  profileInformation:
  {
    height:600,
    width:650,
    alignItems: 'center',
  },
  profileMedical:
  {
    height:250,
    width:650,
  },
  profileAlignment:
  {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
    },
    paddingLeft: "10%",
  },  
    profileAlignment2:
    {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: '2%',
    },
  

    
    profilePicture:
    { 
      height:200,
      width:200,
    },
    doctorsInformation:
    {
      
      width:650,

    },
  minibox: {
    border: '1px solid #01579b',

    // backgroundColor:'white',
    marginLeft: '30px',
    justifyContent: 'spaceBetween',
    borderRadius: '15px',
    // width: '250px',
    textAlign: 'center',
    color:'#01579b',
    //     color: 'blue',
    fontSize: '30px',
    //     fontWeight: 'bold',
    padding: '50px',
    display: 'inline',
    paddingInline: '20px',
    alignItems: 'center',
    float: 'left',
    marginTop: '2%',
    marginLeft: '3%',
    //    borderStyle: "solid",
    //    borderColor: 'blue',
  },
}));