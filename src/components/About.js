import React, { useEffect, useState } from "react";
import {
  aboutMeLanguage,
  aboutMeExperience,
  aboutMeDeEducation,
  aboutMeCeEducation,
} from "../lib/data";

function About(props) {
  const [category, setCategory] = useState("");

  return (
    <div>
      <section className="introTitle">
        <div className="introMainTitle">MAIN INFO</div>
        <div className="introSubTitle">ABOUT ME</div>
      </section>
      <section id="intro">
        <div id="introImgBtn">
          <img src="/assets/img/myPhoto.JPG" id="introImg" alt="myPhoto" />
          <a href="https://github.com/great-simonlee" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/great-simonlee/" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCl3FYAY8ouvC6xNAcAMcI3A"
            target="_blank"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://www.instagram.com/simonlee0630/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/seunghoon.lee.7311" target="_blank">
            <i className="fab fa-facebook-square"></i>
          </a>
          <div id="introMsg">
            <i className="fas fa-envelope"></i>
            <span>great.simonlee@gmail.com</span>
          </div>
          <div id="introPhone">
            <i className="fas fa-phone-alt"></i>
            <span>+1 305 458 8075</span>
          </div>
          <div id="introCV">
            <button className="introCVBtn">Download CV</button>
          </div>
          <div id="introHireMe">
            <a href="#contactBody">
              <button className="introCVBtn">Hire Me</button>
            </a>
          </div>
        </div>
        <div id="introText">
          Hi! Everyone!! I am Seunghoon Simon Lee.
          <br />
          <br />
          I'm so excited to be able to learn about web development and expand
          various networking through the Columbia University coding boot camp. I
          became interested in making business development and investment
          strategies by utilizing business data in various fields.
          <br />
          <br />
          As managing various international businesses in our company's
          portfolio, I was able to see the distinctive busisness strategies that
          can save the entire company or drag the business into a unescapable
          trap. Nowadays, all the companies are establising their special
          business strategy based on their previous datasets. However, only few
          of them can reach the right decision by utilizing the right datasets.
          <br />
          <br />
          So, my final goal is to develop a web-based corporate data managemenet
          system so that all my client will be able to survive even in an
          unprecedented situation in the future.
        </div>
      </section>
      <section id="aboutMeSEE">
        <article className="aboutMeSEEBtn">
          <button
            type="button"
            onClick={() => {
              setCategory("skills");
            }}
          >
            SKILLS
          </button>
        </article>
        <article className="aboutMeSEEBtn">
          <button
            type="button"
            onClick={() => {
              setCategory("experience");
            }}
          >
            EXPERIENCE
          </button>
        </article>
        <article className="aboutMeSEEBtn">
          <button
            type="button"
            onClick={() => {
              setCategory("education");
            }}
          >
            EDUCATION
          </button>
        </article>
      </section>
      <section id="aboutMeSEEContent">
        {category === "skills" && (
          <div id="aboutMeSkill">
            {aboutMeLanguage.map((item, idx) => (
              <div className="aboutMeSkillCard">
                <div className="aboutMeSkillLan">
                  <div className="aboutMeSkillLanTitle">{item.language}</div>
                  <div className="aboutMeSkillLanPercent">{item.level} %</div>
                </div>
                <div className="aboutMeSkillBar">
                  <div
                    className="aboutMeSkillBarPercent"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {category === "experience" && (
          <div id="aboutMeExperience">
            {Object.keys(aboutMeExperience).map((item, desc) => (
              <div className="aboutMeExpCard">
                <div className="aboutMeExpTitle">
                  <div className="aboutMeExpCompany">{item}</div>
                  <div className="aboutMeExpPosition">
                    {aboutMeExperience[item].detail[1]}
                  </div>
                  <div className="aboutMeExpLocaiton">
                    {aboutMeExperience[item].detail[0]}
                  </div>
                  <div className="aboutMeExpTime">
                    {aboutMeExperience[item].detail[2]}
                  </div>
                </div>
                <div className="aboutMeExpContent">
                  <ul className="aboutMeExpContentUl">
                    {aboutMeExperience[item].description.map((desc) => (
                      <li>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {category === "education" && (
          <div id="aboutMeEducation">
            <div id="aboutMeEduDegree">
              <div className="aboutMeEduTitle">Degree Program</div>
              {Object.keys(aboutMeDeEducation).map((item) => (
                <div class="aboutMeEduCard">
                  <img src={aboutMeDeEducation[item][2]} class="eduLogo" />
                  <div class="aboutMeEduContent">
                    <div class="aboutMeEduDeContentUniv">{item}</div>
                    <div class="aboutMeEduDeContentTitle">
                      {aboutMeDeEducation[item][0]}
                    </div>
                    <div class="aboutMeEduContentTime">
                      {aboutMeDeEducation[item][1]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div id="aboutMeEduCert">
              <div className="aboutMeEduTitle">Certificate Program</div>
              {Object.keys(aboutMeCeEducation).map((item) => (
                <div class="aboutMeEduCard">
                  <img src={aboutMeCeEducation[item][2]} class="eduLogo" />
                  <div class="aboutMeEduContent">
                    <div class="aboutMeEduDeContentUniv">{item}</div>
                    <div class="aboutMeEduDeContentTitle">
                      {aboutMeCeEducation[item][0]}
                    </div>
                    <div class="aboutMeEduContentTime">
                      {aboutMeCeEducation[item][1]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
export default About;
