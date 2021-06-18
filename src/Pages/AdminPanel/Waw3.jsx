import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    Typography
  } from '@material-ui/core';
  import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
  import MoneyIcon from '@material-ui/icons/Money';
  import { red } from '@material-ui/core/colors';
  import React from 'react';
  import PersonPinIcon from '@material-ui/icons/PersonPin';
  import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
  
  const Doctors = (props) => (
    <Card
      sx={{ height: '100%' }}
      {...props}
    >
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
              text
            >
              DOCTORS
            </Typography>
            <Typography
              color="#01579b"
              variant="h3"
            >
              4,000
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: '#01579b',
                height: 56,
                width: 56
              }}
            >
              <PersonPinIcon style={{color:'#01579b'}} />
            </Avatar>
          </Grid>
        </Grid>
        <Box 
          sx={{
            pt: 2,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {/* <ArrowUpwardIcon sx={{ color: '#01579b' }} />
          <Typography
            sx={{
              color: '#01579b',
              mr: 1
            }}
            variant="body2"
          >
            12%
          </Typography>
          <Typography
            color="#01579b"
            variant="caption"
          >
            Since last month
          </Typography> */}
        </Box>
      </CardContent>
    </Card>
  );
  
  export default Doctors;
  