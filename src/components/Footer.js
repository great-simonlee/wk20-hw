import React from 'react';

const Footer = (props) => {
    return (
            <section>
                <div id="footerSNS">
                <ul>
                    <li><a href="https://github.com/great-simonlee" target="_blank"><i class="fab fa-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/great-simonlee/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                    <li><a href="https://www.youtube.com/channel/UCl3FYAY8ouvC6xNAcAMcI3A" target="_blank"><i class="fab fa-youtube"></i></a></li>
                    <li><a href="https://www.instagram.com/simonlee0630/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="https://www.facebook.com/seunghoon.lee.7311" target="_blank"><i class="fab fa-facebook-square"></i></a></li>
                </ul>
                </div>
                <div id="footerMark">Created by Simon Lee. Jan 2021.</div>
            </section>
    );
}

export default Footer;