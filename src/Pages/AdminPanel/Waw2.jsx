import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    Typography
  } from '@material-ui/core';
  import { green } from '@material-ui/core/colors';
  import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
  import PeopleIcon from '@material-ui/icons/PeopleOutlined';
  import React from 'react';
  
  const TotalPatients = (props) => (
    <Card {...props}>
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color="#01579b"
              gutterBottom
              variant="h6"
            >
              TOTAL PATIENTS
            </Typography>
            <Typography
              color="#01579b"
              variant="h3"
            >
              {props.totalPatients}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: green[600],
                height: 56,
                width: 56
              }}
            >
              <PeopleIcon style={{color:'#01579b'}} />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            pt: 2
          }}
        >
          {/* <ArrowUpwardIcon sx={{ color: green[900] }} />
          <Typography
            variant="body2"
            sx={{
              color: green[900],
              mr: 1
            }}
          >
            16%
          </Typography>
          <Typography
            color="textSecondary"
            variant="caption"
          >
            Since last month
          </Typography> */}
        </Box>
      </CardContent>
    </Card>
  );
  
  export default TotalPatients;
  