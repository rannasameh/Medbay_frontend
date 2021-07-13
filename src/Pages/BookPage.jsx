import React , { useEffect }from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Grid, Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import IconButton from '@material-ui/core/IconButton';
import Popup from 'reactjs-popup';
import moment from 'moment'
import TimeSlots from '../TimeSlots'
import 'reactjs-popup/dist/index.css';
import axios from 'axios'
import Tooltip from '@material-ui/core/Tooltip'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
let id=localStorage.user
let offday=false
let starting
let ending
let slot
let temp=0
let workingdays
let takenappointments
let avaiableappointments
let allappointments=[{
  value: 0,
  label: '08:30 AM - 09:00 AM'
},
{
  value: 1,
  label: '09:00 AM - 09:30 AM'
},
{
  value: 2,
  label: '09:30 AM - 10:00 AM'
},
{
  value: 3,
  label: '10:00 AM - 10:30 AM'
},]

let dat ={
'18-05-2021':[1,2,3,4],
'19-05-2021':[1,2,3,4,5,6],
'20-05-2021':[2,3],
'21-05-2021':[1,2,3,4,5,6],
}
let chosendate
let chosenday
let slotvalue
let currentdate=moment(new Date()).format('YYYY-MM-DD')
let currentday=new Date(currentdate).toLocaleString('en-us', {weekday:'long'})
function BookPage(props) {
  const [dateState, setDateState] = React.useState(new Date());
  const [slott,setSlot]=React.useState('')

  const changeDate = (e) => {
    setDateState(e);
    chosendate=moment(e).format('YYYY-MM-DD')
    chosenday=new Date(chosendate).toLocaleString('en-us', {weekday:'long'})
    if(chosendate<currentdate)
   { offday=true
    console.log("pass")
    }
    else 
    handleOffDays()
   
  }
function HandleSlot(event){
  const {name,value}=event.target;
 setSlot(value)
 slot=value
 slotvalue=name
 
}
function handleOffDays(){
    if(!workingdays.includes(chosenday))
    offday=true
    else 
    offday=false
      arraySlice()
}
function arraySlice(){
  allappointments=TimeSlots.slice(starting,ending+1)
  takenappointments=dat[chosendate]
  takenappointments?(
available()
  ):
  temp=0

}

function Similar(taken,index)
{
  if (taken.indexOf(index)===-1)
{  return true
}
  else 
{  return false
}
}
function available(){
  avaiableappointments=allappointments.filter(x=>Similar(takenappointments,x.value))
  temp=1
}
function handleDoctorDetails(){
  setOpen(true)
  axios.post('http://localhost:5000/getbookings',{doctor_id : props.doctor.id})
  .then(res =>{
  dat=res.data.message
  conthandleDoctorDetail(dat)
})
  
}
function conthandleDoctorDetail(dat){
  starting=props.doctor.clinic_working_hours_from
  ending=props.doctor.clinic_working_hours_to
  workingdays=props.doctor.clinic_working_days
  if(!workingdays.includes(currentday))
    offday=true
  else 
  offday=false
  allappointments=TimeSlots.slice(starting,ending+1)
  takenappointments=dat[currentdate]
  takenappointments?(
    available()
      ):
      temp=0

}
function handleConfrim(){
  
  axios.post('http://localhost:5000/appointments',{doctor_id : props.doctor.id,patient_id :id ,appointment_time : slotvalue,appointment_date : chosendate})
  .then(res =>{
console.log(res.data.message)
})
handleClose()
}
const [isOpen, setIsOpen] = React.useState(false);
const [open, setOpen] = React.useState(false)

const [switchState, setSwitchState] = React.useState({
  addMultiple: false,
})

const handleSwitchChange = name => event => {
  setSwitchState({ ...switchState, [name]: event.target.checked })
}

const resetSwitch = () => {
  setSwitchState({ addMultiple: false })
}

const handleClickOpen = () => {
  setOpen(true)
}

const handleClose = () => {
  chosendate=""
  slot=""
  setOpen(false)
  resetSwitch()
}
  return (
    
    <div>
    
    <Tooltip  >
    <Button onClick={handleDoctorDetails}  variant="contained" size="small"  style={{ backgroundColor: "#01579b" ,color:"white ",padding:'10px',position: "absolute",bottom: "40px",right:'150px'}} >
    BOOK NOW 
   </Button>
  </Tooltip>
  <Dialog
  fullWidth
  maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
<Typography style={{textAlign:'center',fontWeight:'bold',fontSize:'30px',color:'#01579b'}}>
CHOOSE APPOINTMENT DATE AND TIME
</Typography>
 <DialogContent>
          <Grid container spacing={3}>
          
           <Grid item xs={6} sm={6}>
          <br/>
          <br/>
           <Calendar value={dateState} onChange={changeDate}  />
         </Grid>
         <Grid item xs={6} sm={6}>
       
         <h4 style={{ margin:'10px',color:'white'}}>Available time slots</h4>
           <h4 style={{ margin:'10px'}}>Available time slots</h4>
           
           {offday?<h1>DAY OFF</h1>:
            temp===1?
            avaiableappointments.map((l) => (
             <button
               name={l.value}
               value={l.label}
               onClick={HandleSlot}
               style={{ margin: "5px", padding: "10px",backgroundColor:"#CCDBEE",color:'black' ,border:'none'
               }}
             >
               {l.label}
             </button>
           )) :
         allappointments.map((l) => (
             <button
               name={l.value}
               value={l.label}
               onClick={HandleSlot}
               style={{ margin: "5px", padding: "10px",backgroundColor:"#CCDBEE",color:'black' ,border:'none'
               }}
             >
               {l.label}
             </button>
           )) 
           }
           <h4 >Confirm appointment on {chosendate} </h4>
           <h4 >Time: {slot}</h4>
           </Grid>
           </Grid>
           </DialogContent>
           <DialogActions>
          <IconButton
               fillwidth
               style={{ backgroundColor:"#01579b",
               borderRadius: "4px",color:'white' 
               }}
               onClick={handleConfrim}
             >
                Confirm  <DoneIcon />
             </IconButton>
          <Button onClick={handleClose} color="#01579b">
            Cancel
          </Button>

        </DialogActions>
           <Grid >
       
             

             </Grid>
             </Dialog>
             </div>
  );
}

export default BookPage;

 