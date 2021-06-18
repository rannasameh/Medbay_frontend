import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Button, Menu} from 'semantic-ui-react'
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Icon } from 'semantic-ui-react'

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    content: {
        padding: theme.spacing(10),
        
    },
    SearchInput: {
     width: '75%'
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
    root: {
        display: 'flex',
      },
      appBar: {
    
        marginLeft: drawerWidth,
      },
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
    
  }));  




const Speciality=["Dermatology",'Dentistry','Ear,Nose and Throat','Cardiology']
const City=["Cairo",'Alexandria','Mansoura','Giza']


  
export default function SearchBar(props) 
{var choice
  
    function HandleChange(event){
        const {name,value}=event.target
        console.log(name,value)
        choice=value
       props.fn(prevValue=>{
          return{ 
            ...prevValue,
          [name] : value}
        })
        
        props.constraints()
        console.log(choice)
          }
       
    return (
                
     <Menu compact size='massive' style={{ margin: 20 ,border: `1px solid #01579b `}}>
     <Menu.Item>
     <Icon name='stethoscope' style={{paddingRight:'30px',color: "#01579b" }} />
     <TextField
      id="speciality"
      select
      defaultValue=' '
      name="Speciality"
      label='Speciality'
      onChange={HandleChange}
      value={props.inputValues.Speciality}
      >
      {Speciality.map((option,index) => (
        <MenuItem value={option} id={index}  > {option} </MenuItem>
      ))}
    </TextField>
    </Menu.Item>
    <Menu.Item>
    <Icon name='pin' style={{paddingRight:'30px',color: "#01579b" }} />
    <TextField
      id="City"
      select
      name="City"
      type='search'
      label='City'
      onChange={HandleChange}
      value={props.inputValues.City}
    >
      {City.map((option,index) => (
        <MenuItem value={option} id={index}> {option} </MenuItem>
      ))}
    </TextField>
        </Menu.Item>
       
        <Menu.Item>
        <Icon name='doctor' style={{paddingRight:'30px',color: "#01579b" }} />
        <TextField label='Search by doctor' style={{paddingDown:'-10px',width:'100%'}} name="DoctorName" onChange={props.changefunction}/>
        </Menu.Item>
    
     
     </Menu>
                
              
                
          
    );
}