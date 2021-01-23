import React from 'react';

function Intro(props) {
    return (
        <div>
        <section id="mainBackground">
        <img
          src="/assets/img/background.jpg"
          alt="bg"
          id="mainBackgroundImg"
        />
        <span id="span1">Hello ~</span>
        <span id="span2">I'm Simon Lee</span>
        <span id="span3">Front-end Developer</span>
      </section>    
        </div>
    );
}

export default Intro;