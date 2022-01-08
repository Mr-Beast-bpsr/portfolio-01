import React ,{useRef} from 'react'
import emailjs from '@emailjs/browser';
import "./Contact.css"
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.init('user_UehG0txgY7U28w0qTvJtN');
      emailjs.sendForm('service_37i99na', 'template_7m7578s', form.current, 'user_UehG0txgY7U28w0qTvJtN')
        .then((result) => {
        }, (error) => {
        });
        e.target.reset();
        document.querySelector('.success').style.opacity = 1;
    };
  
    return (

        <div className="footer">
    
        <div className="contact-me" id="contact">
        <hr size="10" color="white"/>
      <form ref={form} onSubmit={sendEmail}>
      <div className="name tex">
        <p className="success">Message sent successfully.</p> 

        <label>Name</label>
        <input type="text" name="user_name" className="form-control form-control-sm"  placeholder="Please enter your name"required/>
       </div>
        <div className="email tex">
<label>Email</label>
        <input className="form-control form-control-sm"   type="email" name="from_email" placeholder="Please enter your email" required/> 
      </div>
      <div className="message tex">
        <label>Message</label>
        <textarea className="form-control form-control-sm"   name="message" placeholder="Please enter your message" required/>
      </div>
      <div className="submit tex">

        <input className="sub" type="submit" value="Send" />
        </div>
      </form>
     
        

{/* //links */}

<div class="contact-links">
  <a
  href="https://www.facebook.com/bpsr.rana/"
  target="_blank"
  class="btn contact-details"
  > Facebook</a
>
<a
      id="profile-link"
      href="https://github.com/Mr-Beast-bpsr"
      target="_blank"
      class="btn contact-details"
      > GitHub</a
    >
    <a
      href="https://twitter.com/elonmusk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
      target="_blank"
      class="btn contact-details"
      >Twitter</a>
    <a href="bpsr.rana@gmail.com" class="btn contact-details"
      >Gmail</a
    >
    <a href="tel:+917018191917" class="btn contact-details"
      >Call me</a
    >
</div>
</div>



        </div>
    );
  
}

export default Contact
