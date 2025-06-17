import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  SiVisualstudiocode,
  SiPostman,
  SiMacos,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from 'react-icons/si';
import { CgDatabase } from 'react-icons/cg';

function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeillustrator />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgDatabase />
      </Col>
    </Row>
  );
}

export default Toolstack;
