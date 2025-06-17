import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            I'm <span className="purple">Aram</span>, a full-stack software
            engineer.
            <br />
            I build scalable, maintainable web apps. Mostly React on the
            frontend, Node.js on the backend, with whatever tools get the job
            done cleanly.
            <br />
            I care about code quality, minimalism, and not reinventing the wheel
            unless the wheel sucks.
            <br />
            <br />
            When I’m not working:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Side projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> DJ’ing
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "Good code is invisible. Bad code screams."
          </p>
          <footer className="blockquote-footer">Aram</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
