import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import axios from 'axios';
import emailjs from "emailjs-com";

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog(props) {
  const [open, setOpen] = React.useState(false);
  const { doctor } = props;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
function handleBanning(){
  console.log("in")
  axios.post('http://localhost:5000/banDoctor',{doctor_id : doctor.id})
  .then(res => {
   console.log(res.data.message)
     
}
)
  handleClose()
}


function sendEmail() {
  console.log("Email SENT!")
   var templateParams = {
       name: 'James',
       email: 'karimelhamy2126@gmail.com',
       //email:SignUpform.email,
       message: 'You have successfully created an account!',
       to_name:'karim'
      
   };

   emailjs.send('service_03p15jn', 'template_yjw6rsv', templateParams, 'user_awcHMTTxtdDbgPuZVpWVs')
   .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
   }, function(error) {
      console.log('FAILED...', error);
   });
}


function handlewarning(){


sendEmail();

  handleClose()
}
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      BAN
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          BAN
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            If you want this Account to be banned from MedBay, please Click on BAN! If not Send warning.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handlewarning} color="primary">
             Send Warning 
          </Button>
          <Button onClick={handleBanning} color="primary">
            BAN!!!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}