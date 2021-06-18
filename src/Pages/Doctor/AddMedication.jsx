import "react-calendar/dist/Calendar.css";
import React , { useEffect }from "react";
import { Grid, Typography } from "@material-ui/core";
import DoneIcon from '@material-ui/icons/Done';
import IconButton from '@material-ui/core/IconButton';
import 'reactjs-popup/dist/index.css';
import axios from 'axios'
import Tooltip from '@material-ui/core/Tooltip'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import { Button, Input, FormControl } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
  validate,
} from '@material-ui/pickers';

function AddMedication() {
const [open, setOpen] = React.useState(false)
const [selectedDate, setSelectedDate] = React.useState(new Date());

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
  setOpen(false)
  resetSwitch()
}
  return (
    <div>
    <Tooltip  >
    <Button  variant="contained" size="small"  style={{ backgroundColor: "#01579b" ,color:"white ",padding:'10px',position: "absolute",bottom: "40px",right:'150px'}} >
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
       <br/>
<Typography style={{textAlign:'center',fontWeight:'bold',fontSize:'30px',color:'#01579b'}}>
CHOOSE APPOINTMENT DATE AND TIME
</Typography>
 <DialogContent>
 <form> <FormControl>
            <h1 color="primary">Add Medication</h1>
            {/* <hr /> */}
            <br />
            <br />
            <Input className="item" placeholder="Medication Name" />
            <br />
            <Input className="item" type="" placeholder="Dose" />



            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardTimePicker
                className="item"
                margin="normal"
                id="time-picker"
                label="Time of Medication"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
              <KeyboardDatePicker
                className="item"
                margin="normal"
                id="date-picker-dialog"
                label="Start Date"
                format="dd/MM/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
            <br />
            <Input className="item" type="number" placeholder="Duration" />
            <br />
            <Input className="item" type="number" placeholder="Number of times/day" />
          </FormControl> </form>
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
 
export default Add;
