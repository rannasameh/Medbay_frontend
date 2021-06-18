import React, { useEffect } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DoctorSearch from "../DoctorSearch"
import { Button, Menu} from 'semantic-ui-react'
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Icon } from 'semantic-ui-react'
import axios from 'axios'

const Speciality=["Allergists/Immunologists",
  "Anesthesiologists",
  "Cardiologists",
  "Colon and Rectal Surgeons",
  "Critical Care Medicine Specialists",
   " Dermatologists",
    "Diagnostic radiology",
   " Emergency medicine",
    "Endocrinologists",
   " Family medicine",
    "Gastroenterologists",
    "Geriatric Medicine Specialists",
    "Hematologists",
    "Hospice and Palliative Medicine Specialists",
    "Infectious Disease Specialists",
    "Nephrologists",
    "Medical genetics",
    "Neurology",
    "Obstetricians and Gynecologists",
    "Oncologists",
    "Ophthalmology",
    "Pathology",
    "Pediatrics",
    "Plastic Surgeons",
   " Physical medicine and rehabilitation",
    "Psychiatry",
    "Radiologists",
   " Surgery",
    "Urology"]
const City=["Cairo",
   "Giza","Alexandria","Qalyubia", " Gharbia", " Menoufia","Fayoum", "El-Dakahlia", " El-Sharqia","El-Beheira",
  "Damietta", "Matrouh","Assiut","El-Ismailia","Hurghada","Sharm El Sheikh"," Portsaid"," Suez", " Sohag", "El-Minia"," Kafr El sheikh", " Luxor","Qena","Beni Suef"]
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


const sections = [
  { title: 'Home', url: '#' },
  { title: 'About us', url: '#' },
  { title: 'Sevices', url: '#' },
  { title: 'Careers', url: '#' },
  { title: 'Contact us', url: '#' },

];
var choice={
  CityChoice:"",
  Specialitychoice:""
};

export default function SearchPage() 
{ 

useEffect(async ()=> {
  
 axios.get('http://localhost:5000/doctors')
 .then(res =>{
  setbackenddata(res.data.message)

 })
    
})

  const [SearchFilter,SetSearchFilter]=React.useState({fn: drs => {return drs;}})
 const [SearchInput,SetSearchInput]=React.useState({
  Speciality:"",
  City:"",
  })
  const [drs,setbackenddata]=React.useState([])

  const classes = useStyles();
  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
  document.head.appendChild(styleLink);
  
  function HandleChange(event){
      const {name,value}=event.target
     if(name === 'Speciality')
      {
        choice.Specialitychoice=value
      }
     else if (name==='City')
      {
        choice.CityChoice=value
        
      }
     SetSearchInput(prevValue=>{
        return{ 
          ...prevValue,
        [name] : value}
      })
      
      SearchConstraints()
        }
     
  const HandleSearch =event =>{
    let target=event.target
    SetSearchFilter({
    fn: drs =>{
      if (target.value===""){
         return drs;
      }
    else if(target.value!=="")
    { 
     return drs.filter(Filter(target))
    }
    }})

  }
  const SearchConstraints =event =>{

    SetSearchFilter({
      fn: drs =>{
        if ( choice.Specialitychoice!==""&&  choice.CityChoice!=="")
        {   
        let m=drs.filter(x => x.city.includes( choice.CityChoice) )
          return m.filter(x => x.specialities.includes( choice.Specialitychoice))
        }
       else if( choice.CityChoice!=="" && choice.Specialitychoice==='')
       {  
         return drs.filter(x => x.city.includes( choice.CityChoice))
      }
       else if ( choice.Specialitychoice!==""&&choice.CityChoice==='')
       {
         return drs.filter(x => x.specialities.includes( choice.Specialitychoice))
       }
         else 
         {
           return drs}
        }
     
  })
 
  
}
  function Filter(target){

    return x => x.first_name.toLowerCase().includes(target.value)|| x.last_name.toLowerCase().includes(target.value)
   
  }
  
  
    return (
       <div >  
      
   <Menu compact size='massive' style={{ margin: 20 ,border: `1px solid #233C67 `}}>
     <Menu.Item>
     <Icon name='stethoscope' style={{paddingRight:'30px',color: "#233C67" }} />
     <TextField
      id="speciality"
      select
      defaultValue=' '
      name="Speciality"
      label='Speciality'
      onChange={HandleChange}
      value={SearchInput.Speciality}
      >
      {Speciality.map((option,index) => (
        <MenuItem value={option} id={index}  > {option} </MenuItem>
      ))}
    </TextField>
    </Menu.Item>
    <Menu.Item>
    <Icon name='pin' style={{paddingRight:'30px',color: "#233C67" }} />
    <TextField
      id="City"
      select
      name="City"
      type='search'
      label='City'
      onChange={HandleChange}
      value={SearchInput.City}
    >
      {City.map((option,index) => (
        <MenuItem value={option} id={index}> {option} </MenuItem>
      ))}
    </TextField>
        </Menu.Item>
       
        <Menu.Item>
        <Icon name='doctor' style={{paddingRight:'30px',color: "#233C67" }} />
        <TextField label='Search by doctor' style={{paddingDown:'-10px',width:'100%'}} name="DoctorName" onChange={HandleSearch}/>
        </Menu.Item>
        <Menu.Item>
        <Button variant="contained" style={{color:'#233C67'}} >Search</Button>
        </Menu.Item>
     </Menu>
                <Grid container spacing={4} className={classes.content}>
               
              { drs? (SearchFilter.fn(drs).map(obj => 
                        {
                            return (<Grid item xs={4}>
                              <DoctorSearch doctor={obj} title={obj.first_name +" "+ obj.last_name }  description={obj.specialities} rating={obj.rating} clinic_phone_number={obj.clinic_phone_number} address={obj.clinic_building +" "+ obj.clinic_street+" "+"st,"+" "+obj.city} working_days={obj.clinic_working_days} />
                                    </Grid>)
                       })):
                       (<h1>Loading..</h1>)
                       
                       }
                       
                </Grid>
              
                
       

        
        </div>
    );
}