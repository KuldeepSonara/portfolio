import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kuldeep Sonara </span>
            from <span className="purple"> Rajkot, India.</span>
            <br /> I am a final year student pursuing Bachelor of Engineering
            (BE/B.Tech) in <span className="purple">
              Computer Engineering
            </span>{" "}
            at <span className="purple"> Darshan university.</span>
            <br />
            {/* Additionally, I am currently employed as a software developer at
            Juspay. */}
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking and Food
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Striving to build things to make future a better place!"{" "}
          </p>
          <footer className="blockquote-footer">Kuldeep</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
