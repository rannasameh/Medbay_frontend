import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: 'white',
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
    backgroundColor:'white',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),

  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',

  },
  fixedHeight: {
    height: 240,
    align: 'left',
  },
  fixedHeightDashboardPaper:
  {
    height: 125,
    width: 700,
  },
  medicinesToday: {
    height:700,
  },
  fullHeight:
  {
      height: "100%",
  },
  biographyPaper:
  { 
    
    padding: '7%',
    width: 323,
    fontFamily: "Arial",
  },
  profileInformation:
  {
    height:600,
    width:250,
    alignItems: 'center',
  },
  profileMedical:
  {
    height:250,
    width:415,
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
    profilePictureContainer:
    {
      position: 'relative',
      textAlign: 'center',
      color: 'white',
    },
    profilePictureRectangle:
    {
      height:50,
      width:250,
      backgroundColor: 'black',
      opacity:"20%",
      position: 'absolute',
      bottom: 0,
    },
    
    profilePictureText:
    {
      position: 'absolute',
      bottom: '0px',
      opacity: '100%',
      left:2,
      bottom:1
    },
    profilePicture:
    { 
      height:250,
      width:250,
    },
    doctorsInformation:
    {
      
      width:650,

    },
    minibox:{
      backgroundColor:'#01579b',
      marginLeft: '30px',
      justifyContent: 'spaceBetween',
      borderRadius: '15px',
      textAlign: 'center',
      color: 'white',
      fontSize: '15px',
      fontWeight: 'bold',
      padding: '12px',
      display: 'inline',
      paddingInline: '20px',
      alignItems: 'center',
      float:'left',
      marginTop: '1%',
    },
}));