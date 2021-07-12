import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import HealingIcon from '@material-ui/icons/Healing';
import history from './history';


const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    
  },
  toolbarTitle: {
    flex: 1,
    
  },
  appBar:{
    zIndex: theme.zIndex.drawer +1
    
  },
  toolbarSecondary: {
  paddingLeft:"100px"
  
  },
  toolbarLink: {
    textAlign:'right',
    width:'100%',
    backgroundColor:"secondary",
  },
 
}));
const sections = [
  { title: 'Home', url: 'http://localhost:3000/' },
  { title: 'About us', url: 'http://localhost:3000/aboutus' },
  { title: 'Sevices', url: 'http://localhost:3000/services' },
  { title: 'Contact us', url: 'http://localhost:3000/contactus' },
];

export default function Header(props) {
  const classes = useStyles();
  const { title } = props;

  return (
    <React.Fragment >
    <appBar position="fixed" >
      <Toolbar className={classes.toolbar}>
      <HealingIcon color='secondary'/>
        <Typography
          component="h2"
          variant="h5"
          color="secondary"
          style={{fontFamily:"Impact,fantasy",}}
          fontWeight="bold"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <IconButton color="secondary">
          <SearchIcon />
        </IconButton>
        <Button  size="small" color="secondary" onClick={()=>history.push(`/SignInPage`)}  style={{ margin: 8 }} >
         Login
        </Button>
        <Button variant="contained" size="small" color="secondary" onClick={()=>history.push(`/SignUpPage`)}>
          JOIN US
        </Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}  >
     
        {sections.map(section => (
          <Link
            color="secondary"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title }
          </Link>
        ))}
      </Toolbar>
      </appBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};