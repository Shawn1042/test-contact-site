
import React, { useRef } from 'react'
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
   
        <div className='container'>
        <div className='wrap'>
                <div className='cube'>
                   <img src='https://rare-gallery.com/mocahbig/1376939-satoru-gojo-hollow-purple-jujutsu-kaisen-anime.jpg' />
                   <img src='https://c4.wallpaperflare.com/wallpaper/671/998/552/bleach-s%C5%8Dsuke-aizen-wallpaper-preview.jpg' />
                   <img src='https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/Goku-Gohan-Kamehameha.jpg' />
                   <img src='https://practicaltyping.com/wp-content/uploads/2019/11/lightyagami.jpeg' />
                </div>
            </div>
            <h2>Contact Me!</h2>
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' placeholder='Full Name' name='user_name' required    />
                <input type='email' placeholder='Email' name='user_email' required    />
                <input type='text' placeholder='Subject' name='user_subject' required    /> 
                <textarea name='message' cols="30" rows="10">
                </textarea>
                <button type='submit'></button>

            </form> 
        </div>
  
  )
}