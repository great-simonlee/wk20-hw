import React, { useState, useEffect } from "react";

const Portfolio = (props) => {
  const [hoverStatus, setHoverStatus] = useState({
    img1: false,
    img2: false,
    img3: false,
    img4: false,
    img5: false,
    img6: false,
    img7: false,
  });

  const pfImg = [
    "/assets/img/PF/pf1.png",
    "/assets/img/PF/pf2.png",
    "/assets/img/PF/pf3.png",
    "/assets/img/PF/pf4.png",
    "/assets/img/PF/pf5.png",
    "/assets/img/PF/pf6.png",
    "/assets/img/PF/pf7.png",
  ];

  const pfTitle = {
    Weather_Dashboard: "Vanilla JS",
    Password_Generator: "Vanilla JS",
    Note_Taker: "Vanilla JS",
    Employee_Tracker: "Vanilla JS",
    Budget_Tracker: "Vanilla JS",
    Workout_Tracker: "Vanilla JS",
    Employee_Directory: "Vanilla JS",
  };

  const pfWebpage = {
    Weather_Dashboard: "https://great-simonlee.github.io/Wk6_Weather/",
    Password_Generator:
      "https://great-simonlee.github.io/Wk3_PasswordGenerator/",
  };

  return (
    <>
      <section className="introTitle">
        <div className="introMainTitle">MAIN INFO</div>
        <div className="introSubTitle">PORTFOLIO</div>
      </section>
      <section id="pfSection">
        {pfImg.map((img, idx) => (
          <div className="pfCard">
            <img
              src={img}
              className="pfImg"
              onMouseOver={() => {
                const status = { ...hoverStatus };

                status[`img${idx + 1}`] = true;

                setHoverStatus({ ...status });
              }}
            />
            {hoverStatus[`img${idx + 1}`] && (
              <div
                className="pfTitle"
                onMouseLeave={() => {
                  const status = { ...hoverStatus };

                  status[`img${idx + 1}`] = false;

                  setHoverStatus({ ...status });
                }}
              >
                <div className="pfTItleBg"></div>
                <div className="pfProject">{Object.keys(pfTitle)[idx]}</div>
                <div className="pfLang">{Object.values(pfTitle)[idx]}</div>
                <a href="#portfolioBody" className="pfAnchor">
                  <button type="button" class="pfBtn">
                    LEARN MORE
                  </button>
                </a>
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
};

export default Portfolio;
