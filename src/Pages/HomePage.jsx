import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from '../Header';
import MainFeaturedPost from '../MainFeaturedPost';
import Main from '../Main';
import Footer from '../Footer';
import Slide2 from'../Images/Slide6.jpeg';
import Typography from '@material-ui/core/Typography';
import Carousel from"react-material-ui-carousel";
import Slide3 from'../Images/sliddee.jpeg'
import Slide4 from'../Images/Slidd.webp'

let id=localStorage.user



const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3), 
    
   
  },
}));



const array = [
  
  {title: '',
  description:"",
  image: Slide2,},
  {title: '',
  description:"",
  image: Slide3,
},
  {title: '',
  description:"",
  image: Slide4,
}
];

const sidebar = {
  
  social: [
    
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};


export default function HomePage() {
  const classes = useStyles();

  return (
    <React.Fragment >

      <CssBaseline />
      <Container  maxWidth="lg">
        <Header title="MEDBAY" />
        <main>
        <Carousel>{array.map((post,index)=> <MainFeaturedPost key={index} post={post}/> )}</Carousel>
             <h1 style={{fontFamily:"Impact,fantasy",fontWeight:"bold" ,fontSize:'34px' ,color:'#01579b',padding:'20px'}}>OUR MISSION</h1>
          <Typography variant="h5"style={{paddingLeft:'30px',fontFamily:'"Times New Roman", Times, serif' }}>Our mission is to always improve the quality of life and the quality of work for all our doctors and patients . Safety and success of our patients are always our focus.We strive to lead every aspect of the healthcare industry and continue to launch products that have positive impact on people’s lives.In our day to day practice, we strive to apply our CARE principle in all that we do. These are the core values we believe are of utmost importance as we try to achieve and maintain the highest level of care we feel all our patients deserve. By nurturing a family-orientated work environment among our staff, we aim to provide a warm and welcoming atmosphere and set a standard of excellence in providing quality health care in the region</Typography>
          <h1 style={{fontFamily:"Impact,fantasy",fontWeight:"bold" ,fontSize:'34px' ,color:'#01579b',padding:'20px'}}></h1>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main />
           
          </Grid>
        </main>
      </Container>
     
      <Footer title="MEDBAY" description="Bringing The future of healthcare" />
    </React.Fragment>
  );
}