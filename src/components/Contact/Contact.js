import React from 'react';
import "./Contact.css";

const Contact = () => {
    return (
        <div>
        <section class="contact-area" id="contact-part" >
        <h1 class="contact-title">Contact With Us</h1>
        <p class="contact-paragraph">This one is a typical sweet Thanksgiving pie, although it took a bit of getting used to, at first. Top it up with Contact With Us and Enjoy.</p>
        <div class="d-flex-contact">
            <div class="address">
                <div class="home">
                    <i class="fas fa-map-marker-alt"></i>
                    <h5>Home</h5>
                    <p>558, Shaheenbag, Tejgaon, Dhaka</p>
                </div>
                <div class="email">
                    <i class="fas fa-envelope"></i>
                    <h5>Email</h5>
                    <p><a href="mailto:someone@example.com">nextcareertech@gmail.com</a></p>
                </div>
                <div class="phone">
                    <i class="fas fa-mobile-alt"></i>
                    <h5>Phone</h5>
                    <p><a href="tel:+02264248622">+880 1616 888 888</a></p>
                </div>
            </div>       
            <div class="message">
                <form action="#" method="post">                   
                        <div class="name">
                            <div class="form-group">
                                <input name="name" type="text" class="form-control" id="name" placeholder="Name"/>
                            </div>
                        </div>                 
                        <div class="email">
                            <div class="form-group">
                                <input name="email" type="email" class="form-control" id="email" placeholder="Email"/>
                            </div>
                        </div>             
                    <div class="form-group">
                        <input name="sub" type="text" class="form-control" id="sub" placeholder="Subject"/>
                    </div>
                    <div class="form-group">
                        <textarea name="msg" class="form-control" id="mag" rows="4" placeholder="Message"></textarea>
                    </div>
                    <div class="text-right">
                        <a class="anchor-button" href="/">Send</a>
                    </div>
                </form>
            </div>   
        </div>  
    </section>
        </div>
    );
};

export default Contact;