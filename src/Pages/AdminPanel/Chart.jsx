import React , { useEffect }from 'react';
import Typography from '@material-ui/core/Typography';
import { Pie } from 'react-chartjs-2';
import axios from 'axios'
let malePatients=0
let femalePatients=0
let maleDoctors=0
let femaleDoctors=100

const pieOptions = {
  legend: {
    display: false,
    position: "right",
    legendCallback: function (chart) {
      // Return the HTML string here.
      console.log(chart);
      return [
        <ul>
          <li>z</li>
          <li>zzzz</li>
          <li>ppp</li>
          <li>adasda</li>
        </ul>
      ];
    }
  },
  elements: {
    arc: {
      borderWidth: 0
    }
  }
};



const ChartPage = () => {
  let chartInstance = null;
  const [users,setbackenddata]=React.useState([])
useEffect(async ()=> {
  axios.get('http://localhost:5000/getUsers')
  .then(res =>{
   setbackenddata(res.data)
    malePatients=res.data.malePatients
    femalePatients=res.data.femalePatients
   maleDoctors=res.data.maleDoctors
   femaleDoctors=res.data.femaleDoctors
  })  
 })
const genPieData = () => {
  return {
    maintainAspectRatio: false,
    responsive: false,
    datasets: [
      {
        data: [60, 70, 100, 110],
        backgroundColor: [
          '#DBE9F3',
          '#7392BA',
          '#2E5894',
          '#072F5F',

        ],
        label: 'Dataset 1',
      },
    ],
    labels: ['Male Patients', 'Female Patients ', 'Female Doctors', 'Male Doctors']
  };
};
  return (
    <div className="App">
    <br/>
      <Typography variant="h6" gutterBottom component="div"style = {{textAlign:"center" , color:"white", backgroundColor:"#01579b"}} >
               Distribution of Users
              </Typography>
      <div style={styles.relative}>
        <div style={styles.pieContainer}>
          <Pie
            data={genPieData}
            options={pieOptions}
            ref={input => {
              chartInstance = input;
            }}
          />
        </div>
        <div id="legend" />
      </div>
    </div>
  );
}

const styles = {
  pieContainer: {
    width: "40%",
    height: "40%",
    top: "50%",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%, -50%)"
  },
  relative: {
    position: "relative"
  }
};

export default ChartPage;


