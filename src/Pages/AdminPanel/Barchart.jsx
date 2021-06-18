import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import { Bar } from 'react-chartjs-2';
export default class Button extends Component {
  render() {
    const dataBar = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'New Patients',
          backgroundColor: '#072F5F',
          borderColor: '#072F5F',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'New Doctors',
          backgroundColor: '#5175A7',
          borderColor: '#5175A7',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };

    return (
      <div>
      <br/>
      <Typography variant="h6" gutterBottom component="div"style = {{textAlign:"center" , color:"white", backgroundColor:"#01579b"}} >
               New Users
              </Typography>
        <Bar
          data={dataBar}
          width={100}
          height={50}
        />
      </div>
    );

  }
}
