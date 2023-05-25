import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';



export default function Contact() {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('contact_service',
         'template_03jbkze', form.current,
          'Luz0WnUL5FNmUQGm9')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

  return (
   
        <div className='hero'>

            
            <form ref={form} onSubmit={sendEmail}>
            <h2>Contact Me!</h2>
            
                <input type='text' placeholder='Full Name' name='user_name' required    />
                <input type='email' placeholder='Email' name='user_email' required    />
                <input type='text' placeholder='Subject' name='user_subject' required    /> 
              
                <textarea name='message' cols="30" rows="10">
                </textarea>
               
                <button type='submit'>Submit</button>
            </form>

         

           
            

        </div>

  )
}
