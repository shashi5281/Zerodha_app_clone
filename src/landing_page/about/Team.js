import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/shashi_image.jpeg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Shashi Paswan</h4>
          <h6>Enthusiastic Software Developer</h6>
        </div>
        <div className="col-6 p-3">
          <p>
          I am a passionate software developer with 6 months of web development experience, specializing in the MERN stack (MongoDB, Express, React, Node.js). I have a proven track record of building responsive, user-friendly applications and optimizing web platforms. My recent internship at Agriculture Insurance Company of India Limited (AIC) allowed me to enhance user interfaces and improve backend integration. I’m dedicated to continuous learning and contributing to innovative development teams.
          </p>
          {/* <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p> */}
          <p>Playing Batminton is my zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;