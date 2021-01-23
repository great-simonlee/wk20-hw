import React from 'react';

const Contact = (props) => {
    return (
        <>
        <section class="introTitle">
            <div class="introMainTitle">MAIN INFO</div>
            <div class="introSubTitle">CONTACT ME</div>
        </section>
        <section id="contactMeSubmit">
            <form id="contactMeUserInput" action="">
            <input id="contactMeName" name="contactMeName" type="text" placeholder="  Name" />
            <input id="contactMeEmail" name="contactMeEmail" type="email" placeholder="  Enter Email" />
            <textarea id="contactMeMsg" name="contactMeMsg" cols="30" rows="10" placeholder=" Your Message"></textarea>
            <button id="contactMeBtn" type="button">SUBMIT</button>
            </form>
        </section>
        </>
        
    );
}

export default Contact;