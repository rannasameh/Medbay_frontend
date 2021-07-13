import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import axios from 'axios';
import history from "../../history"
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function UploadButtons() {
  const classes = useStyles();

  function setfile({ target: { files } })
    {
        
        if (files[0].name !== ' No file chosen')
        {console.log(localStorage.type)
            let formData = new FormData();
            if(localStorage.type==="Patient")
          {  let url = ` http://localhost:5000/patients/${localStorage.user}`;
            formData.append('avatar' , files[0])
            axios.request({
                method: "put", 
                url: url, 
                data: formData,
                // headers: { Authorization: "Bearer " + localStorage.token },
            }).then (res => {
                
                 history.go(0);
                
            })}
            else if(localStorage.type==="Doctor")
            {  let url = ` http://localhost:5000/doctors/${localStorage.user}`;
              formData.append('avatar' , files[0])
              axios.request({
                  method: "put", 
                  url: url, 
                  data: formData,
                  // headers: { Authorization: "Bearer " + localStorage.token },
              }).then (res => {
                  
                   history.go(0);
                  
              })}
        }
        else 
        {
            console.log('not chosen')
        }
    }

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={setfile}/>
      <label htmlFor="icon-button-file">
        <IconButton color="#DBE9F3" aria-label="upload picture" component="span">
          <PhotoCamera style={{color:'white'}} />
        </IconButton>
      </label>
    </div>
  );
}