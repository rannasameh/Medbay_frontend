import React from 'react';
import emailjs from "emailjs-com";

function sendEmail() {
    //if( user has no medication) return;
    console.log("Email SENT!")
     var templateParams = {
         name: 'Medbay',
         email: 'karimelhamy2126@gmail.com',
         //email:SignUpform.email,
         message: 'Dont forget to take your specified Medication!',
         to_name:'karim'
        
     };
  
     emailjs.send('service_favse3e', 'template_4kd99ke', templateParams, 'user_unkmNdrSwYmUT3PSzf1ep')
     .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        
     }, function(error) {
        console.log('FAILED...', error);
     });
  }
  
  // var intervalId= setInterval(sendEmail() {
  //   alert("interval every 5 secs")},5000 );
  //setInterval(sendEmail,60000);
  export { sendEmail };