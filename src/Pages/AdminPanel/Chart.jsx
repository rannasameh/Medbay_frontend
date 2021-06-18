import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

import { Pie } from 'react-chartjs-2';


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


const genPieData = () => {
  return {
    maintainAspectRatio: false,
    responsive: false,
    datasets: [
      {
        data: [100, 150, 200, 56, 67],
        backgroundColor: [
          '#DBE9F3',
          '#7392BA',
          '#2E5894',
          '#072F5F',
          '#58CCED',
        ],
        label: 'Dataset 1',
      },
    ],
    labels: ['Male Patients', 'Female Patients ', 'Female Doctors', 'Male Doctors', 'Children'],
  };
};
const ChartPage = () => {
  let chartInstance = null;
  return (
    <div className="App">
     <h1>Distribution of Users</h1>
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
    left: "20%",
    position: "absolute",
    transform: "translate(-50%, -50%)"
  },
  relative: {
    position: "relative"
  }
};

export default ChartPage;


